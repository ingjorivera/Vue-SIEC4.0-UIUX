<script setup>
import '../../css/avatar.css'
import { useLoginStore } from '../../store/login';
import { useStoreToast } from '../../store/toast';
const storeUser = useLoginStore()
const storeToast = useStoreToast()
</script>
<template>
    <div class="container-avatar">
      <div class="badge-avatar" v-on:click="storeToast.visibleLeft=true">
        <i class="fa-solid fa-bell"></i>
      </div>
        <div class="circulo-avatar amarillo-palido30-b">
        <i class="fas fa-user xl amarillo-palido-claro-t"></i>
        </div>
        <span class="nombre-usuario blanco-t enfasis s normal">{{storeUser.data.name + storeUser.data.lastName}}</span>
        <span class="area-usuario primario-t texto xs thin">{{storeUser.data.role}}</span>
    </div>
</template>