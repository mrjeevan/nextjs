import axios from 'axios'

export async function products() {
    const response = await axios.get("https://original-test.vercel.app/api/products",{
        headers: {
            'Accept-Encoding': 'application/json',
        }
    })
    return (response.data)
}
