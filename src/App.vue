<script setup>
import { ref } from 'vue';
import Sidebar from 'primevue/sidebar';
import { useToast } from 'primevue/usetoast'
import { nextTick } from 'vue';
import Avatar from './components/sidebar/Avatar.vue'
import Menu from './components/sidebar/Menu.vue'

const toast = useToast()
const visibleLeft=ref(false)
function muestraNotificacion(titulo,texto,icono){
    toast.add({severity:'info', summary:titulo, detail:texto})
    nextTick(() =>{
    const now = new Date();
    const not=document.querySelectorAll('.p-toast-message')
    const mes=not[not.length-1].querySelector('.p-toast-detail')
    const ic=not[not.length-1].querySelector('.p-toast-message-icon')
    
    const withPmAm = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    mes.setAttribute('tiempo',withPmAm);
    ic.setAttribute('icon','\f36d')

    })
    
  }
function verNotificaciones(){
  visibleLeft.value=true
  console.log('entra')
}
window.addEventListener('load', function() {
        const loader=document.getElementById('loading');
        loader.style.opacity='0';
        loader.addEventListener('transitionend',()=>loader.remove())     
    })

</script>

<template>
<Sidebar v-model:visible="visibleLeft">
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
           
        </main>
        <div class="logo"><img src="./assets/logo.svg" alt=""></div>
  </div>
   
</template>
