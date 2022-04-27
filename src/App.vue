<script setup>
import { ref,provide } from 'vue';
import Sidebar from 'primevue/sidebar';

import formMulti from './components/formulario-multipaso.vue'

import Main from './views/Main.vue'
import Login from './views/Login.vue'
import { useLoginStore } from './store/login'
import { useStoreToast } from './store/toast';

const store =  useLoginStore()
const storeToast = useStoreToast()


// provide('menu',menuItems)

// const toast = useToast()
// const visibleLeft=ref(false)
// function muestraNotificacion(titulo,texto,icono){
//     toast.add({severity:'info', summary:titulo, detail:texto})
//     nextTick(() =>{
//     const now = new Date();
//     const not=document.querySelectorAll('.p-toast-message')
//     const mes=not[not.length-1].querySelector('.p-toast-detail')
//     const ic=not[not.length-1].querySelector('.p-toast-message-icon')
    
//     const withPmAm = now.toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//     });

//     mes.setAttribute('tiempo',withPmAm);
//     ic.setAttribute('icon','\f36d')

//     })
    
//   }
// function verNotificaciones(){
//   visibleLeft.value=true
//   console.log('entra')
// }
//          window.addEventListener('load', function() {
//         const loader=document.getElementById('loading');
//         loader.style.opacity='0';
//         loader.addEventListener('transitionend',()=>loader.remove())     
//     })

</script>
<template>
<!-- <template>
<Sidebar v-model:visible="visibleLeft" id="sidebarNotif">
	<p>Notificaciones</p>
</Sidebar>
  <Toast class="toastSIEC" id="notif" tiempo="0"/>
  <div id="loading">
        <img src="./assets/logo.svg" alt="">
        <span class="enfasis s uppercase bold">Cargando</span>
  </div>
  <div class="container">
        <aside id="sidebar">
           <Avatar nombre='Nelcy Johana Garcia' area='Productivo'  @verNotificaciones="verNotificaciones"/> 
           <Menu @notificacion="muestraNotificacion"/>
        </aside>
        <main class="main degradado" id="main">
          <div class="bg-img"></div>
           <formMulti/>
        </main>
        <div class="logo"><img src="./assets/logo.svg" alt=""></div>
  </div> -->
   <Sidebar v-model:visible="storeToast.visibleLeft" id="sidebarNotif" header="Header">
     <div class="notificaciones-scroll">
           <div class="notif-wrapper">
                 <div class="circulo-n"></div>
                 <div class="contenido-n ">
                       <div class="titulo-n uppercase blanco-t bold enfasis m">Titulo de notificacion</div>
                       <div class="texto-n blanco-t s texto">Texto de notificacion</div>
                       <div class="tiempo-n negro-t blanco-b xs">00:00</div>
                 </div>
           </div>
     </div>
   </Sidebar>
      <Transition name="main" mode="out-in" >
            <Login v-if="!store.userlogin.authenticated"></Login>
            <Main v-else></Main>
      </Transition>
      <Toast class="toastSIEC" id="notif" tiempo="0"/>
</template>

<style>
 .main-enter-active,
 .main-leave-active{
     transition: all 1s ease;
 }

.main-enter-from,
.main-leave-to{
    opacity:0;
    
}
</style>