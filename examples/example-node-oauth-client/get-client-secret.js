require('dotenv').config()
const axios = require('axios')

const getClientSecret = async () => {
  try {
    const response = await axios.put(
      `${process.env.API_URL}/v2/oauth2/clients/${process.env.CLIENT_ID}/secret`,
      {
        client_id: process.env.CLIENT_ID,
      },
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
