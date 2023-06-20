export interface GetUserArgs {
  accessToken: string
  apiUrl: string
}

export interface GetUserResponseData {
  data: {
    userID: string
    primaryUserID: string
    username: string
    name: string
    role: string
    userType: string
    profilePic: string
    media: {
      name: string
      link: string
      type: string
    }[]
    status: string
    isPhoneVerified: boolean
    isEmailVerified: boolean
    MFAEnabled: boolean
    email: string
  }
}
