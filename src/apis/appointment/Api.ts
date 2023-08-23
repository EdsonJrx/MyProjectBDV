import { useState } from 'react'

const BASE_API = 'http://10.55.0.10:8053/api';
const CODSENTENCA = 'Z01.1.1'
const COLIGADA = '0'
const CODSISTEMA = 'M'
const ROWS = 10
const CODUSUARIO = 'edson.junior'
const IDPRJ = 4147
const CODCOLIGADA = 1

export default {
    listAppoint: async (token:string|null, page:number) => {
        const req = await fetch(`${BASE_API}/framework/v1/consultaSQLServer/RealizaConsulta/${CODSENTENCA}/${COLIGADA}/${CODSISTEMA}?parameters=PAGE=${page};ROWS=${ROWS};CODUSUARIO=${CODUSUARIO};IDPRJ=${IDPRJ};CODCOLIGADA=${CODCOLIGADA}`, {
        method:'GET',
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    
    const json = await req.json();
    return json;
    }
}