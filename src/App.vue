<script setup>
import { ref,provide } from 'vue';
import Sidebar from 'primevue/sidebar';

import Main from './views/Main.vue'
import Login from './views/Login.vue'
import { useLoginStore } from './store/login'
import { useStoreToast } from './store/toast';

const store =  useLoginStore()
const storeToast = useStoreToast()


</script>
<template>

   <Sidebar v-model:visible="storeToast.visibleLeft" id="sidebarNotif" header="Header">
     <div class="notificaciones-scroll">
           <template v-for="item in storeToast.historial">
           <div class="notif-wrapper" >
                 <div class="circulo-n"></div>
                 <div class="contenido-n ">
                       <div class="titulo-n uppercase blanco-t bold enfasis s">{{item.titulo}}</div>
                       <div class="texto-n gris-t s texto">{{item.texto}}</div>
                       <div class="tiempo-n negro-t blanco-b xs">{{item.hora}}</div>
                 </div>
           </div>
           </template>
           
     </div>
   </Sidebar>
      <Transition name="main" mode="out-in" >
            <Login v-if="!store.userlogin.authenticated"></Login>
            <Main v-else></Main>
      </Transition>
      <Toast class="toastSIEC" id="notif"/>
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