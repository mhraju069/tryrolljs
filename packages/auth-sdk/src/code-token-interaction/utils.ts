import sha256 from 'crypto-js/sha256'
import Base64Url from 'crypto-js/enc-base64url'

export const getRandomString = (minLength = 16) => {
  const getFiveRandomChars = () => Math.random().toString(36).slice(-5)
  return Array(Math.round(minLength / 5))
    .fill(0)
    .reduce((acc) => acc + getFiveRandomChars(), '')
}

export const pkceChallengeFromVerifier = async (value: string) => {
  const hash = sha256(value)
  return Base64Url.stringify(hash)
}
