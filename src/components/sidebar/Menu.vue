<script setup>
import '../../css/menu.css'
import { useMenuStore } from '../../store/menu'
import { useStoreToast } from '../../store/toast';
import { useLoginStore } from '../../store/login';

const store = useMenuStore()
const storeToast=useStoreToast()
const storeLogin=useLoginStore()

function resetStores(){
    storeToast.reset()
    storeLogin.userlogin.reset()
    storeLogin.data.reset()
}

const menu=store.filtrarMenu(storeLogin.data.role)


</script>
<template>
<div class="container-menu"  id="container-menu" v-on:mouseleave="store.cerrar">
    <hr>
    <div class="inner-menu" id="innerMenu" @scroll="store.scrollFunction">
        
        <input type="radio" name="sub1" id="cerrar" checked>
        <div class="more up bold l blanco-t" id="up"></div>
        <div class="more down bold l blanco-t" id="down"></div>
        <template v-for="(itemMenu,indexM) in menu">
             
            <div class="wrapper-btn-menu" :id="'btn-menu'+indexM"  >
                <button class="btn-menu transparente-b" v-on:mouseenter="store.getPos(indexM)">
                    <i class="xl amarillo-palido-t" :class="itemMenu.icono"></i>
                    <span class="titulo-menu amarillo-palido-t xxs enfasis normal" >{{itemMenu.titulo}}</span>
                    
                </button>
                <div class="indicador" :id="'in'+indexM"></div>
                    <div class="submenu" :id="'menu'+indexM">
                       
                        <div class="elementos-submenu">
                            <template v-for="(subItem, indexI) in itemMenu.subItems" >
                                <div class="sub-wrap">
                                <template v-if="subItem.elementos">
                                    <div class="subitem">
                                        <input type="radio" name="sub1" :id="indexM+'item'+indexI">
                                        <label for="cerrar" class="close-accordion"></label>
                                        <label :for="indexM+'item'+indexI" class="boton enfasis xs  transparente-b blanco titulo-subitem" style="--bg:var(--amarillo-palido30); --texto:var(--blanco);">
                                            {{subItem.titulo}}
                                        </label>
                                        <div class="subitems-wrapper amarillo-oscuro30-b" :style="'--tam: '+subItem.elementos.length*30+'px'">
                                            <template v-for="elem in subItem.elementos">
                                            <button class="boton-subitem texto xs blanco-t transparente-b">
                                                {{elem.titulo}}
                                            </button>
                                            </template>
                                        </div>
                                    </div>
                                </template>
                                <template v-if="!subItem.elementos">
                                    <button class="boton enfasis xs  transparente-b blanco-t a100" style="--bg:var(--amarillo-palido30); --texto:var(--blanco);" v-on:click="storeToast.muestraNotificacion(subItem.titulo,'Texto pasado desde el menu')">
                                    {{subItem.titulo}}
                                    </button>
                                </template>
                                </div>
                            </template>
                        </div>
                    </div>
                
            </div>
            
        </template>
    </div>
    
    <hr>
    <div class="logout-btn">
        <button class="boton anima logout xs enfasis bold" style="--color: var(--primario); --texto:var(--negro)" v-on:click="resetStores">
            Cerrar sesion
        </button>
    </div>
</div>
</template>

