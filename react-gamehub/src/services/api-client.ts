import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
   params: {
    key: "b3bb917b32ec4a4282c4b49710f6476b"
   }
})
