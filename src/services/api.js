import axios from 'axios'

// 08141030/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws"
})

export default api