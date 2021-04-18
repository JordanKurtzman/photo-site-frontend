const axios = require('axios')

const getToken = async () => {
    try{
        let response = await axios.post('http://localhost:8000/wp-json/jwt-auth/v1/token', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'JordanKurtzman',
                password: 'Castor1234!'
            })
        })
        localStorage.setItem('token', response.token)
    }catch(error){
        console.log(error)
    }      
}

const sendFormData = async () => {
    try{
        let response = await axios.post('http://localhost8000:/wp/v2/form-submissions',{
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer' + localStorage.getItem('token')
            }
        })
        return response.json()
        
    }
    catch(error){
        console.log(error)
    }
}

export {getToken, sendFormData}