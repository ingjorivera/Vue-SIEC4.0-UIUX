<script setup>
import '../../css/avatar.css'
defineProps({
  nombre: String,
  area:String
})
</script>
<template>
    <div class="container-avatar">
      <div class="badge-avatar" v-on:click="$emit('verNotificaciones')">
        <i class="fa-solid fa-bell"></i>
      </div>
        <div class="circulo-avatar amarillo-palido30-b">
        <i class="fas fa-user xl amarillo-palido-claro-t"></i>
        </div>
        <span class="nombre-usuario blanco-t enfasis s normal">{{nombre}}</span>
        <span class="area-usuario primario-t texto xs thin">{{area}}</span>
    </div>
</template>