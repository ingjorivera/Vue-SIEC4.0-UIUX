<script setup>
    import '../css/login.css'
    import Dialog from 'primevue/dialog';
    import { useLoginStore } from '../store/login'
    import { Motion, Presence } from 'motion/vue'
   

    const store = useLoginStore()
</script>
<template>
    <div class="login-wrapper degradado">
        
        <Motion 
            class="login-box"
            :initial="{
                    opacity:0,
                    scale:.8
                    }"
                :animate="{
                    opacity:1,
                    scale:1,
                    transition:{
                        duration:.7,
                        easing:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
                        delay:1
                        }
                    }"
        >
        <Presence>      
                <Motion 
                v-if="!store.userlogin.loader" 
                class="login-screen"
                :animate="{opacity:1, scale:1}"
                :exit="{opacity:0, scale:.9}"
                
                >
                <span class="titulo enfasis primario-t xxl bold">Iniciar sesion</span>
                <span class="blanco-t texto m normal texto-login">Bienvenido nuevamente, ingresa los datos para acceder al sistema.</span>
           
                <div class="login-form gris-formulario-b">
                    <div class="elemento">
                        <label for="" class="enfasis gris-oscuro-t s uppercase">Usuario:</label>
                        <input type="text" class="input-normal texto s" v-model="store.data.role" placeholder="alguien@ejemplo.com">
                    </div>
                    <div class="elemento">
                        <label for="" class="enfasis gris-oscuro-t s uppercase">Contraseña:</label>
                        <input type="password" class="input-normal texto s" placeholder="****">
                    </div>
                </div>
                <div class="footer-login">
                    <span class="texto primario-t subrayado-primario cursor-pointer s" v-on:click="store.userlogin.modalRecover=true">Olvide mi contraseña</span>
                    <button class="boton primario-b negro-t s enfasis bold anima" style="--color: var(--primario); --texto:var(--negro)" v-on:click="store.iniciarSesion">Iniciar sesion</button>
                </div>
            </Motion>
        </Presence> 
            <div
                v-if="store.userlogin.loader" 
                class="loading-screen">
                <Presence>
                    <Motion 
                        class="cargando-wrapper"
                        v-if="store.userlogin.loader"
                        :initial="{opacity:0,translateY:'50px'}"
                        :animate="{opacity:1,translateY:0}"
                        :transition="{
                            duration:.6,
                            easing:'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
                        }"
                        >
                        <span class="blanco-t enfasis l">Un momento por favor</span>
                        <i class="fa-solid fa-circle-notch xl primario-t fa-spin"></i>
                    </Motion>
                </Presence> 
               
            </div>
        
        </Motion>
       
       
     
     
        <div class="bg-img bg-login"></div>
        <img src="../assets/ebsa-logo.svg" alt="" class="ebsa-logo">
        <img src="../assets/logo.svg" alt="" class="siec-logo">  
        <Dialog v-model:visible="store.userlogin.modalRecover" :modal="true" class="recover-modal" :dismissableMask="true" @hide="store.resetRecover">
            <template #header>
               <span class="enfasis uppercase primario-t bold l">Restaurar contraseña</span>
            </template>
            <template v-if="!store.userlogin.loadRecover">
                <span class="texto blanco-t m">Ingresa tu correo para poder restaurar tu contraseña</span>
                <form @submit.prevent class="recover-pass">
                    <input type="text" placeholder="ejemplo@correo.com" class="input-normal texto s">
                    <button class="boton enfasis negro-t primario-b anima s bold" style="--color: var(--primario); --texto:var(--negro)" v-on:click="store.recoverPass">Restaurar</button>
                </form>
            </template>
            <template v-else>
                <span class="texto blanco-t m ">{{store.userlogin.mensRecov}}</span>
            </template>
        </Dialog>
    
    </div>    
</template>