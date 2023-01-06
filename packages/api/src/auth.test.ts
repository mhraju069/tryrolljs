import { getLogInUrl, getLogOutUrl } from './auth'

jest.mock('./utils', () => ({
  ...jest.requireActual('./utils'),
  getRandomString: jest.fn().mockReturnValue('foo'),
}))

describe('auth', () => {
  it('builds a login URL', () => {
    expect(
      getLogInUrl({
        clientId: 'clientId',
        redirectUrl: 'http://localhost:8000',
        issuerUrl: 'http://localhost:3000/oauth2',
        scopes: ['offline', 'openid', 'base', 'read-tx', 'write-tx'],
      }),
    ).toBe(
      'http://localhost:3000/oauth2/auth?client_id=clientId&redirect_uri=http%3A%2F%2Flocalhost%3A8000&scopes=offline%2Copenid%2Cbase%2Cread-tx%2Cwrite-tx&response_type=code&response_mode=query&state=foo&nonce=foo',
    )
  })

  it('builds a logout URL', async () => {
    expect(
      getLogOutUrl({
        redirectUrl: 'http://localhost:8000',
        issuerUrl: 'http://localhost:3000/oauth2',
        idToken: 'id_token',
      }),
    ).toBe(
      'http://localhost:3000/oauth2/sessions/logout?post_logout_redirect_uri=http://localhost:8000&state=foo&id_token_hint=id_token',
    )
  })
})
