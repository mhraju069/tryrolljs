require('dotenv').config()
const axios = require('axios')

const getClientSecret = async () => {
  try {
    const response = await axios.put(
      `https://api.tryroll.com/v2/oauth2/clients/${process.env.CLIENT_ID}/secret`,
      undefined,
      {
        headers: {
          authorization: `Bearer ${process.env.CLIENT_OWNER_ACCESS_TOKEN}`,
        },
      },
    )

    console.log(response.data)
  } catch (e) {
    console.error(e.response ? e.response.data : e)
  }
}

getClientSecret()
