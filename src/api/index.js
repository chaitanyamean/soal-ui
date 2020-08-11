import axios from 'axios';

const baseURL = 'http://localhost:8000/api'
   

export const loginApi = async (loginData) => {
        const {email,password} = loginData;

    try {
        const response = await axios.post(`${baseURL}/login`, {
            email,
            password
        })
        
        return response;
    }
    catch{}
}


export const products = async () => {
        const token = localStorage.getItem('token')
        const id = localStorage.getItem('username')

    try{
        const response = await axios.get(`${baseURL}/getAllProducts`, {
                
        })

        return response.data;

    }

    catch{}
}


export const categories = async () => {

    const token = localStorage.getItem('token')
        const id = localStorage.getItem('username')

    try{
        const response = await axios.get(`${baseURL}/getCategory`, {
                
        })
        return response.data.data.categories;

    }

    catch{}
}


export const getProductsByCategoryId = async (id) => {
        const token = localStorage.getItem('token')

    try{
        const response = await axios.get(`${baseURL}/getProductsByCategoryId/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
        })
        return response.data.data;

    }

    catch{}
}