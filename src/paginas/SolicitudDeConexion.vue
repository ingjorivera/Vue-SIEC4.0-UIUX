<script setup>
import Formulario from '../components/Formulario.vue'
import '../css/formulario-multipaso.css'

import { usePasosStore } from '../store/formulario-multipaso'
import { useLoginStore } from '../store/login';


const storePasos = usePasosStore()
const storeLogin=useLoginStore()
let selected=0

</script>

<template>
<div class="multipaso-wrapper">
    <div class="cabecera-pagina">
        <span class="titulo1 enfasis xxl bold primario-t uppercase">Solicitud de</span>
        <span class="titulo2 enfasis xl primario-t uppercase">Conexion</span>
    </div>
    <div class="contenido-pagina">
        <div class="buscador">
            <input type="text" class="caja-busqueda texto m">
            <button class="boton-buscar negro-t primario-b enfasis m">Buscar<i class="fas fa-search"></i></button>
        </div>
        <div class="formulario-wrapper">
            <template v-for="(p,i) in storePasos.pasos">
                    <input type="radio" name="tabs" :id="'boton'+i" :checked="i===0">
                </template>
            <nav>
                <div class="linea gris-oscuro-claro-b" :style="'--tam: '+storePasos.pasos.length*8+'%'"></div>
                
                <template v-for="(paso, indexP) in storePasos.pasos">
                    
                    <label class="step-container" :for="'boton'+indexP" :class="'paso'+indexP">
                        <span class="texto-paso enfasis gris-oscuro-claro-t m" > {{paso.titulo}}</span>
                        <div class="circulo-numero bold enfasis xxl gris-oscuro-claro-b gris-oscuro-t" > {{paso.numero}}</div>
                        <div class="paso-estado" >
                        <template v-if="paso.estado">
                            <div class="fondo-estado"></div>
                        </template>
                        <template v-if="paso.estado==='Exito'">
                            <i class="fas fa-check-circle m exito-t"></i>
                            
                        </template>
                        <template v-if="paso.estado==='Error'">
                            
                            <i class="fas fa-exclamation-circle m advertencia-t"></i>
                        </template>
                    </div>
                    </label>
                </template>
            </nav>
            <main>
                <div class="contenido-formulario">
                    <template v-for="(paso,indexC) in storePasos.pasos" >
                    <div :id="'contenido'+indexC" class="wrapper-cf" :class="'contenido'+indexC">
                        <div class="cabecera-formulario">
                                <span class="texto-paso-formulario enfasis m normal gris-t" >{{indexC+ " de "+storePasos.pasos.length}}</span>
                                <span class="titulo-paso-formulario enfasis xl normal blanco-t" >{{indexC+'. '+paso.titulo}}</span>
                        </div>
                        
                        <div class="cont-formulario gris-formulario-b">
                            <div class="scroll-formulario">
                                <div class="form-wrap">
                                <Formulario :data="paso.elementos" :tipo="paso.tipo"></Formulario>
                                </div>
                            </div>
                        </div>
                    </div>
                    </template>
                </div>
                <div class="botonera">
                    <template v-if="selected>0 && selected < storePasos.pasos.length">
                        <i class="fas fa-chevron-circle-left xxl primario-t"></i>
                    </template>
                    <template v-if="!(selected === storePasos.pasos.length-1)">
                        <i class="fas fa-chevron-circle-right xxl primario-t"></i>
                    </template>
                    <template v-if="selected === storePasos.pasos.length-1">
                        <button class="boton anima enfasis primario-b negro-t s bold" style="--color: var(--primario); --texto:var(--negro)"><i class="fas fa-save m"></i> Guardar</button>
                    </template>
                </div>
            </main>
        </div>
    </div>
</div>
</template>