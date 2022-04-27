<script setup>
    import '../css/login.css'
    import Dialog from 'primevue/dialog';
    import { useLoginStore } from '../store/login'
    
    const store = useLoginStore()
    
</script>
<template>
    <div class="login-wrapper degradado">
        
        <div class="login-box">
            <Transition name="login" >
            <div v-if="!store.userlogin.loader" class="login-screen">
                <span class="titulo enfasis primario-t xxl bold">Iniciar sesion</span>
                <span class="blanco-t texto m normal texto-login">Bienvenido nuevamente, ingresa los datos para acceder al sistema.</span>
           
                <div class="login-form gris-formulario-b">
                    <div class="elemento">
                        <label for="" class="enfasis gris-oscuro-t s uppercase">Usuario:</label>
                        <input type="text" class="input-normal texto s">
                    </div>
                    <div class="elemento">
                        <label for="" class="enfasis gris-oscuro-t s uppercase">Contraseña:</label>
                        <input type="text" class="input-normal texto s">
                    </div>
                </div>
                <div class="footer-login">
                    <span class="texto primario-t subrayado-primario cursor-pointer s" v-on:click="store.userlogin.modalRecover=true">Olvide mi contraseña</span>
                    <button class="boton primario-b negro-t s enfasis bold anima" style="--color: var(--primario); --texto:var(--negro)" v-on:click="store.iniciarSesion">Iniciar sesion</button>
                </div>
            </div>
            
            <div v-else class="loading-screen">
               
                <div class="cargando-wrapper">
                    <span class="blanco-t enfasis l">Un momento por favor</span>
                    <i class="fa-solid fa-circle-notch xl primario-t fa-spin"></i>
                </div> 
               
            </div>
         </Transition>  
        </div>
       
       
     
     
        <div class="bg-img bg-login"></div>
        <img src="../assets/ebsa-logo.svg" alt="" class="ebsa-logo">
        <img src="../assets/logo.svg" alt="" class="siec-logo">  
        <Dialog v-model:visible="store.userlogin.modalRecover" :modal="true" class="recover-modal" :dismissableMask="true" @hide="store.resetRecover">
            <template #header>
               <span class="enfasis uppercase primario-t bold l">Restaurar contraseña</span>
            </template>
            <template v-if="!store.userlogin.loadRecover">
                <span class="texto gris-t m">Ingresa tu correo para poder restaurar tu contraseña</span>
                <form @submit.prevent class="recover-pass">
                    <input type="text" placeholder="ejemplo@correo.com" class="input-normal texto s">
                    <button class="boton enfasis negro-t primario-b anima s" style="--color: var(--primario); --texto:var(--negro)" v-on:click="store.recoverPass">Restaurar</button>
                </form>
            </template>
            <template v-else>
                <span class="texto blanco-t m ">{{store.userlogin.mensRecov}}</span>
            </template>
        </Dialog>
    
    </div>    
</template>