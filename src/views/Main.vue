<script setup>

import Avatar from '../components/sidebar/Avatar.vue'
import Menu from '../components/sidebar/Menu.vue'
import router from '../router';
router.push('/solicitud-conexion')
</script>

<template>
<div>

  <!-- <Toast class="toastSIEC" id="notif" tiempo="0"/> -->

  <div class="container">
        <aside id="sidebar">
           <Avatar/> 
           <Menu />
        </aside>
        <main class="main degradado" id="main">
          <router-view class="paginas"></router-view>
          <div class="bg-img"></div>
        </main>
        <div class="logo"><img src="../assets/logo.svg" alt=""></div>
  </div>
</div>
</template>