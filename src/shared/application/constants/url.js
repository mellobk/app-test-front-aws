
let URL_DEV

if(process.env.NODE_ENV==='development'){
    URL_DEV='http://127.0.0.1:8000/'
}else{
    URL_DEV='https://api.estudioxtreme.com/API/'
}
export const CORREO_STUDIO='@adminwebcam.com.co'
export const URL=URL_DEV