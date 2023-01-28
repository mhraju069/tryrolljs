import axios from 'axios'
import Client from './client'
import { Event } from './types'

jest.mock('axios', () => jest.fn().mockReturnValue({ status: 200 }))

const mockAxios = axios as unknown as jest.Mock

const defaultConfig = {
  getClientVersion: jest.fn().mockReturnValue('0.0.0'),
  getAuthorization: jest.fn().mockReturnValue('Bearer 123'),
  getAuthorizationExpired: jest.fn().mockReturnValue(false),
}

const defaultParsers = {
  error: jest.fn(),
}

const defaultHandlers = {
  refresh: jest.fn(),
}

describe('client', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('calls anonymous request', async () => {
    const client = new Client(defaultConfig, defaultParsers, defaultHandlers)

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
    const client = new Client(defaultConfig, defaultParsers, defaultHandlers)

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
    const getAuthorizationExpired = jest.fn().mockReturnValue(true)

    const handleRefresh = jest.fn().mockImplementation(async () => {
      // Check that the API call is not performed until the refresh is done.
      await new Promise((resolve) => setTimeout(resolve, 1000))
    })

    const client = new Client(
      { ...defaultConfig, getAuthorizationExpired },
      defaultParsers,
      { ...defaultHandlers, refresh: handleRefresh },
    )

    const request = {
      method: 'POST',
      url: 'https://foo.bar',
      authorization: true,
      body: { foo: 'bar' },
    }

    await client.call(request)

    expect(handleRefresh).toHaveBeenCalled()
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

    expect(handleRefresh.mock.invocationCallOrder[0]).toBeLessThan(
      mockAxios.mock.invocationCallOrder[0],
    )
  })

  it('emits unauthorized', async () => {
    mockAxios.mockRejectedValue({
      response: { status: 401, data: { foo: 'bar' } },
    })

    const unauthorizedListener = jest.fn()
    const parseError = jest.fn().mockImplementation((response: any) => response)

    const client = new Client(
      defaultConfig,
      { ...defaultParsers, error: parseError },
      defaultHandlers,
    )
    client.on(Event.Unauthorized, unauthorizedListener)

    const request = {
      method: 'GET',
      url: 'https://foo.bar',
    }

    await expect(client.call(request)).rejects.toEqual({
      status: 401,
      data: { foo: 'bar' },
    })

    expect(unauthorizedListener).toHaveBeenCalledTimes(1)
  })

  it('handles errors', async () => {
    mockAxios.mockRejectedValue({
      response: {
        status: 500,
        message: 'Something went wrong',
        data: { foo: 'bar' },
      },
    })

    const parseError = jest.fn().mockImplementation((response: any) => response)

    const client = new Client(
      defaultConfig,
      { ...defaultParsers, error: parseError },
      defaultHandlers,
    )

    const request = {
      method: 'GET',
      url: 'https://foo.bar',
    }

    await expect(client.call(request)).rejects.toEqual({
      data: { foo: 'bar' },
      message: 'Something went wrong',
      status: 500,
    })

    expect(parseError).toHaveBeenCalledWith({
      data: { foo: 'bar' },
      message: 'Something went wrong',
      status: 500,
    })
  })
})
