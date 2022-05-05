<script setup>
import '../css/formulario.css'
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import AutoComplete from 'primevue/autocomplete';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import InputSwitch from 'primevue/inputswitch';
import RadioButton from 'primevue/radiobutton';
import SelectButton from 'primevue/selectbutton';
import Slider from 'primevue/slider';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';

import { useToast } from 'primevue/usetoast';

const storeToast=useToast()

const props = defineProps({
    data: Object,
    tipo:String
})
const sel=ref()
const sel2=ref()


</script>

<template>
    
    <template  v-for="(datos) in props.data" >
    <div class="elemento-formulario" :style="{'min-width':(60+(datos.etiqueta.length>datos.valor.length ? datos.etiqueta.length : datos.valor.length)*7)+'px', 'max-width': datos.tipo_campo==='select button'? '180px ':''}">
        <div v-if="datos.tipo_campo==='input text'" class="el-input">
            
                <label  class=" texto etiqueta-input  gris-oscuro-claro-t s" :class="{'titulo-etiqueta-requerido':datos.requerido}">{{datos.etiqueta}}</label>
                <i :class="'icono-input '+datos.icono"></i>
                <InputText class="input-normal texto s" :class="{'with-icon':datos.icono}" id="username" type="text" :placeholder="datos.placeholder" :disabled='datos.disabled' v-tooltip.top.focus="datos.mensaje_info"/>
                <small :class="{'p-error':datos.error}" class="texto s">{{datos.mensaje_error}}</small>   
            
        </div>
        <div v-if="datos.tipo_campo==='dropdown'" class="el-dropdown">
            <label class=" texto   gris-oscuro-claro-t s" :class="{'titulo-etiqueta-requerido':datos.requerido}">{{datos.etiqueta}}</label>
            <Dropdown class="dropdown-normal" v-model="sel" :options="datos.opciones" optionLabel="titulo_opcion" optionValue="value" placeholder="Seleccionar" />
            <small :class="{'p-error':datos.error}" class="texto s">{{datos.mensaje_error}}</small> 
        </div>
        <div v-if="datos.tipo_campo==='select button'" class="el-select">
            <label class=" texto gris-oscuro-claro-t s" :class="{'titulo-etiqueta-requerido':datos.requerido}">{{datos.etiqueta}}</label>
            <SelectButton v-model="sel2" :options="datos.opciones" optionLabel="titulo_opcion" />
            <small :class="{'p-error':datos.error}" class="texto s">{{datos.mensaje_error}}</small> 
        </div>
        <div v-if="datos.tipo_campo==='upload'" class="el-upload">
            <label class=" texto   gris-oscuro-claro-t s" :class="{'titulo-etiqueta-requerido':datos.requerido}">{{datos.etiqueta}}</label>
            <FileUpload mode="basic" name="demo[]" url="./upload" @upload="storeToast.muestraNotificacion=('Subir archivo','el archivo se subio con exito')" :auto="true" chooseLabel="Escoger"  />
            <small :class="{'p-error':datos.error}" class="texto s">{{datos.mensaje_error}}</small> 
        </div>
        <div v-if="datos.tipo_campo==='switch'" class="el-switch">
            <div class="obj-switch" v-for="s in datos.opciones">
                <label class=" texto   gris-oscuro-claro-t s" :class="{'titulo-etiqueta-requerido':s.requerido}">{{s.etiqueta}}</label>
                <InputSwitch v-model="s.checked" class="input-switch"/>
                <small :class="{'p-error':s.error}" class="texto s">{{s.mensaje_error}}</small> 
            </div>
        </div>
        <div v-if="datos.tipo_campo==='label'" class="el-label">
            <label  class=" texto grupo-formulario-t s" :class="{'titulo-etiqueta-requerido':datos.requerido}">{{datos.etiqueta}}</label>
            <span class="label-form texto gris-oscuro-t m "><i :class="datos.icono"></i><p class="texto s">{{datos.valor}}</p></span>
        </div>
       
    </div>
    </template>

</template>