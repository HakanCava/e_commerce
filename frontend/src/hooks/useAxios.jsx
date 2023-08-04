import axios from "axios"
import { useSelector } from "react-redux"

const BASE_URL = "http://localhost:5000/api";



const useAxios = () => {
  const { token } = useSelector((state) => state.auth)
  

  const axiosPublic = axios.create({
    baseURL: BASE_URL,
  })

  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${token}` },
  })

  return { axiosWithToken, axiosPublic }
}

export default useAxios
