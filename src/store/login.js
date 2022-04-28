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
        mensRecov:'Enviando el correo..',
        reset:()=>{
            userlogin.value.authenticated=false;
            userlogin.value.loader=false;
            userlogin.value.loadRecover=false;
            userlogin.value.recoverSend=false;
            userlogin.value.modalRecover=false;
            userlogin.value.username='';
            userlogin.value.password='';
            userlogin.value.mensRecov='';
            
        }
    })

    const data = ref({
        name:'',
        lastName:'',
        avatar:'',
        role:'',
        reset:()=>{
           data.value.role='';
           data.value.lastName='';
           data.value.name=''

        }

    })

    const datosUsuario = () => {
        // console.log('llamado a la api para obtener los datos de usuario')
        data.value.name='Nelcy Jhoana'
        data.value.lastName='Garcia'
    }
    const iniciarSesion = () =>{
        userlogin.value.loader=true
        setTimeout(()=>{
            userlogin.value.authenticated=true
            datosUsuario()
            setTimeout(()=>{
                userlogin.value.loader=false
            },2000)
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
},{persist:true})