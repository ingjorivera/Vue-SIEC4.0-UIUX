<script setup>
import { inject, provide, ref } from 'vue';
import pasos from './js/formulario-multipaso'
import '../css/formulario-multipaso.css'

import InputText from 'primevue/inputtext';

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
            <template v-for="(p,i) in pasos.pasos">
                    <input type="radio" name="tabs" :id="'boton'+i" :checked="i===0">
                </template>
            <nav>
                <div class="linea gris-oscuro-claro-b" :style="'--tam: '+pasos.pasos.length*8+'%'"></div>
                
                <template v-for="(paso, indexP) in pasos.pasos">
                    
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
                    <template v-for="(paso,indexC) in pasos.pasos" >
                    <div :id="'contenido'+indexC" class="wrapper-cf" :class="'contenido'+indexC">
                        <div class="cabecera-formulario">
                                <span class="texto-paso-formulario enfasis m normal gris-t" >{{indexC+ " de "+pasos.pasos.length}}</span>
                                <span class="titulo-paso-formulario enfasis xl normal blanco-t" >{{indexC+'. '+paso.titulo}}</span>
                        </div>
                        
                        <div class="cont-formulario gris-formulario-b">
                            <div class="scroll-formulario">
                                <div class="con">
                                    
                                    <div class="elemento-formulario"> 
                                        <label for="" class="texto s grupo-formulario-t icono-input" input-icon="&#xf007;">Etiqueta:</label>
                                        <span class="p-input-icon-left">
                                        <InputText type="text" v-model="value1" placeholder="Texto" class="input-iconL" />
                                        </span>
                                    </div>
                                    <div class="elemento-formulario"> 
                                        <label for="" class="texto s grupo-formulario-t ">Etiqueta:</label>
                                        <InputText type="text" v-model="value1" placeholder="Texto" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </template>
                </div>
                <div class="botonera">
                    <template v-if="selected>0 && selected < pasos.pasos.length">
                        <i class="fas fa-chevron-circle-left xxl primario-t"></i>
                    </template>
                    <template v-if="!(selected === pasos.pasos.length-1)">
                        <i class="fas fa-chevron-circle-right xxl primario-t"></i>
                    </template>
                    <template v-if="selected === pasos.pasos.length-1">
                        <button class="boton anima enfasis primario-b negro-t s bold" style="--color: var(--primario); --texto:var(--negro)"><i class="fas fa-save m"></i> Guardar</button>
                    </template>
                </div>
            </main>
        </div>
    </div>
</div>
</template>