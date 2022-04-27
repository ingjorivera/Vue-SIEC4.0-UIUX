import { defineStore, storeToRefs } from "pinia";
import { ref, shallowRef } from "vue";


export const useLoginStore = defineStore("mainLogin", ()=>{
   
    const userlogin = ref({
        authenticated:false,
        loader:false,
        loadRecover:false,
        recoverSend:false,
        modalRecover:false,
        username:'',
        password:'',
        mensRecov:'Enviando el correo..'
    })

    const data = ref({
        name:'',
        lastName:'',
        avatar:'',
        role:''
    })

    const datosUsuario = () => {
        // console.log('llamado a la api para obtener los datos de usuario')
        data.value.name='Nelcy Jhoana'
        data.value.lastName='Garcia'
        data.value.role='Productivo'
    }
    const iniciarSesion = () =>{
        userlogin.value.loader=true
        setTimeout(()=>{
            userlogin.value.authenticated=true
            datosUsuario()
        },5000)
    }
    const recoverPass = () =>{
        userlogin.value.loadRecover=true
        userlogin.value.mensRecov='Enviando el correo...'
        setTimeout(()=>{
            userlogin.value.mensRecov='Correo enviado con exito!'
        },5000)
    }
    const resetRecover = () =>{
        userlogin.value.loadRecover=false
        userlogin.value.recoverSend=false
        
    }

    return {
        userlogin,
        data,
        datosUsuario,
        iniciarSesion,
        recoverPass,
        resetRecover,
       
    }
})