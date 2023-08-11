import { btoa } from 'react-native-quick-base64';


const BASE_API = 'http://10.55.0.10:8053/api';

export default {
    login: async (userName:string, password:string) => {
        const basicToken = btoa(`${userName}:${password}`);
        const req = await fetch(`${BASE_API}/connect/token`, {
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Basic ${basicToken}`
        },
        body:JSON.stringify({
            "userName": `${userName}`,
            "password": `${password}`
        })
    });
    const json = await req.json();
    return json;
    },
    refreshToken: async (refresh_token:string) => {
        const req = await fetch(`${BASE_API}/connect/token/`, {
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "refresh_token": `${refresh_token}`,
            "grant_type": "refresh_token"
        })
    });
    const json = await req.json();
    console.log(json)
    return json;
    },
    checkToken: async (token:string, username:string) => {
        const req = await fetch(`${BASE_API}/framework/v1/users?username=${username}`, {
        method:'GET',
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    const json = await req.json();
    return json;
    }
}