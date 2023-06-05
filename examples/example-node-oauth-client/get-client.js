require('dotenv').config()
const axios = require('axios')

const getClient = async () => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/v2/oauth2/clients/${process.env.CLIENT_ID}`,
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

getClient()
