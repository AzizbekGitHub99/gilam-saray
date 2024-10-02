import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL

export const api = axios.create({
    baseURL,
 });

 export const getAllProducts = async () => {
    const res = await api.get('/api/products?populate=*')
    return res.data
 }

 export const getProductById = async (id) => {
   const res = await api.get(`/api/products/${id}`)
   return res.data
 }