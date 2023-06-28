import axios from 'axios'
import Client from './client'
import { CouldntRefreshTokensError } from './errors'

jest.mock('axios', () => jest.fn())

const mockAxios = axios as unknown as jest.Mock
const authSdk = {
  isTokenExpired: jest.fn().mockResolvedValue(false),
  getToken: jest.fn().mockReturnValue({ access_token: '123' }),
  refreshToken: jest.fn(),
  cleanUp: jest.fn(),
} as any

const defaultConfig = {
  headers: {
    'X-Client-Version': '0.0.0',
  },
}

describe('client', () => {
  beforeEach(() => {
    mockAxios.mockReturnValue({ status: 200 })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('calls anonymous request', async () => {
    const client = new Client(defaultConfig, authSdk)

    const request = {
      method: 'GET',
      url: 'https://foo.bar',
    }

    await client.call(request)

    expect(mockAxios).toHaveBeenCalledWith({
      url: request.url,
      method: request.method,
      body: undefined,
      headers: {
        Authorization: undefined,
        'Content-Type': 'application/json',
        'X-Client-Version': '0.0.0',
      },
    })
  })

  it('calls authorized request', async () => {
    const client = new Client(defaultConfig, authSdk)

    const request = {
      method: 'POST',
      url: 'https://foo.bar',
      authorization: true,
      body: { foo: 'bar' },
    }

    await client.call(request)

    expect(mockAxios).toHaveBeenCalledWith({
      url: request.url,
      method: request.method,
      data: { foo: 'bar' },
      headers: {
        Authorization: 'Bearer 123',
        'Content-Type': 'application/json',
        'X-Client-Version': '0.0.0',
      },
    })
  })

  it('calls refresh before authorized request', async () => {
    const authSdk_ = {
      ...authSdk,
      isTokenExpired: jest.fn().mockResolvedValue(true),
      refreshToken: jest.fn().mockResolvedValue({}),
    }
    const client = new Client(defaultConfig, authSdk_)

    const request = {
      method: 'POST',
      url: 'https://foo.bar',
      authorization: true,
      body: { foo: 'bar' },
    }
    const calls = [
      client.call(request),
      client.call(request),
      client.call(request),
      client.call(request),
      client.call(request),
      client.call(request),
      client.call(request),
      client.call(request),
      client.call(request),
      client.call(request),
      client.call(request),
      client.call(request),
      client.call(request),
    ]

    await Promise.all(calls)

    expect(authSdk_.refreshToken).toHaveBeenCalled()
    expect(mockAxios).toHaveBeenCalledWith({
      url: request.url,
      method: request.method,
      data: { foo: 'bar' },
      headers: {
        Authorization: 'Bearer 123',
        'Content-Type': 'application/json',
        'X-Client-Version': '0.0.0',
      },
    })

    expect(mockAxios.mock.calls).toHaveLength(calls.length)
    const firstAxiosCallOrder = Math.min(...mockAxios.mock.invocationCallOrder)
    expect(authSdk_.refreshToken.mock.calls).toHaveLength(1)
    expect(authSdk_.refreshToken.mock.invocationCallOrder[0]).toBeLessThan(
      firstAxiosCallOrder,
    )
  })

  it('clean SDK when unauthorized', async () => {
    mockAxios.mockRejectedValue({
      response: { status: 401, data: { foo: 'bar' } },
    })

    const client = new Client(defaultConfig, authSdk)

    const request = {
      method: 'GET',
      url: 'https://foo.bar',
    }

    await expect(client.call(request)).rejects.toEqual({
      status: 401,
      message: '',
      details: '',
      errorCode: 0,
    })

    expect(authSdk.cleanUp).toHaveBeenCalledTimes(1)
  })

  it('handles errors', async () => {
    mockAxios.mockRejectedValue({
      response: {
        status: 500,
        message: 'Something went wrong',
        data: {
          message: 'Something went wrong',
          details: 'Invalid user credentials',
          errorCode: 1,
        },
      },
    })

    const client = new Client(defaultConfig, authSdk)

    const request = {
      method: 'GET',
      url: 'https://foo.bar',
    }

    await expect(client.call(request)).rejects.toEqual({
      message: 'Something went wrong',
      details: 'Invalid user credentials',
      errorCode: 1,
      status: 500,
    })
  })

  it('uses api url when a request with a relative url is used', async () => {
    const client = new Client(
      {
        ...defaultConfig,
        baseUrl: 'https://foo.bar',
      },
      authSdk,
    )

    const request = {
      method: 'GET',
      url: '/relative/url',
    }

    await client.call(request)

    expect(mockAxios).toHaveBeenCalledWith({
      url: 'https://foo.bar/relative/url',
      method: request.method,
      body: undefined,
      headers: {
        Authorization: undefined,
        'Content-Type': 'application/json',
        'X-Client-Version': '0.0.0',
      },
    })

    await client.call({ ...request, url: 'relative/url' })

    expect(mockAxios).toHaveBeenCalledWith({
      url: 'https://foo.bar/relative/url',
      method: request.method,
      body: undefined,
      headers: {
        Authorization: undefined,
        'Content-Type': 'application/json',
        'X-Client-Version': '0.0.0',
      },
    })
  })

  it('does not use api url when a request with an absolute url is used', async () => {
    const client = new Client(
      {
        ...defaultConfig,
        baseUrl: 'https://foo.bar',
      },
      authSdk,
    )

    const request = {
      method: 'GET',
      url: 'https://absolute.url/foo/bar',
    }

    await client.call(request)

    expect(mockAxios).toHaveBeenCalledWith({
      url: 'https://absolute.url/foo/bar',
      method: request.method,
      body: undefined,
      headers: {
        Authorization: undefined,
        'Content-Type': 'application/json',
        'X-Client-Version': '0.0.0',
      },
    })
  })

  it('does not refresg when a non-logged in user', async () => {
    const authSdk_ = {
      ...authSdk,
      getToken: jest.fn().mockReturnValue(undefined),
      isTokenExpired: jest.fn().mockResolvedValue(true),
      refreshToken: jest.fn().mockRejectedValue(new Error()),
    }
    const client = new Client(defaultConfig, authSdk_)

    const request = {
      method: 'POST',
      url: 'https://foo.bar',
      authorization: true,
      body: { foo: 'bar' },
    }

    await client.call(request)

    expect(mockAxios).toHaveBeenCalledWith({
      url: request.url,
      method: request.method,
      data: { foo: 'bar' },
      headers: {
        Authorization: undefined,
        'Content-Type': 'application/json',
        'X-Client-Version': '0.0.0',
      },
    })
    expect(authSdk_.refreshToken).not.toHaveBeenCalled()
  })

  it('resets queue when refresh fails for logged in user', async () => {
    const authSdk_ = {
      ...authSdk,
      isTokenExpired: jest.fn().mockResolvedValue(true),
      refreshToken: jest.fn().mockRejectedValue(new Error()),
    }
    const client = new Client(defaultConfig, authSdk_)

    const request = {
      method: 'POST',
      url: 'https://foo.bar',
      authorization: true,
      body: { foo: 'bar' },
    }

    await expect(client.call(request)).rejects.toBeInstanceOf(
      CouldntRefreshTokensError,
    )

    expect(authSdk_.refreshToken).toHaveBeenCalled()
    expect(mockAxios).toHaveBeenCalledTimes(0)
  })
})
