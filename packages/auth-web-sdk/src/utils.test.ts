import { pkceChallengeFromVerifier } from './utils'

describe('utils', () => {
  it('generates code challenge from verifier', async () => {
    expect(await pkceChallengeFromVerifier('test-value')).toBe(
      'WxQG__yd5VN-s1qEXJlSHyb7oOdy1YtC4J9CIbngQ64',
    )
  })
})
