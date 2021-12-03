import axios from "axios"

export const BASE_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/recipes`
export const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
    }
}

export const postRecipe = async (body) => {
  const response = await axios.post(BASE_URL, { fields: body }, config)
  return response.data
}

export const putRecipe = async (body, id) => {
  const response = await axios.put(`${BASE_URL}/${id}`, { fields: body }, config)
  return response.data
}