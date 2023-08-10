import axios from 'axios';
import { btoa } from 'react-native-quick-base64';

const BASE_API = 'http://10.55.0.10:8053/api';

export default {
    checkToken: async () => {

    },
    login: async (userName, password) => {
        const token = btoa(`${userName}:${password}`);
        
        let data = JSON.stringify({
            "userName": `${userName}`,
            "password": `${password}`
        })

        let config = { 
            method: 'post',
            maxBodyLength: Infinity,
            url: `${BASE_API}/connect/token/`,
            headers: { 
                'Content-type': 'application/json', 
                'Accept': 'application/json', 
                'Authorization': `Basic ${token}`
            },
            data : data
        };

        const res = await axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error.response.data);
        });
        const resp = await res
        return console.log(`resposta ${resp}`);
    }
}