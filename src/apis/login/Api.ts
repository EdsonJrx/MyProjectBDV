const BASE_API = 'http://10.55.0.10:8053/api';
const SERVICE_ALIAS = 'CorporeRM_Homol_Jul23'

export default {
    login: async (userName:string, password:string) => {
        try{

            const req = await fetch(`${BASE_API}/connect/token`, {
                method:'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    'grant_type': 'password',
                    'userName': `${userName}`,
                    'password': `${password}`,
                    'servicealias':`${SERVICE_ALIAS}`
                })
            });
            const json = await req.json();
            return json;
        } catch (error) {
            alert(error);
        }
    },
    refreshToken: async (refresh_token:string|null) => {
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
    return json;
    },
    checkToken: async (token:string, username:string|null) => {
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