<template>
<div class="container-menu"  id="container-menu" v-on:mouseleave="cerrar()">
    <hr>
    <div class="inner-menu" id="innerMenu" @scroll="scrollFunction()">
        
        <input type="radio" name="sub1" id="cerrar" checked>
        <div class="more up bold l blanco-t" id="up"></div>
        <div class="more down bold l blanco-t" id="down"></div>
        <template v-for="(itemMenu,indexM) in menu">
             
            <div class="wrapper-btn-menu" :id="'btn-menu'+indexM"  >
                <button class="btn-menu transparente-b" v-on:mouseenter="getPos(indexM)">
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
                                        <label for="close" class="close-accordion"></label>
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
                                    <button class="boton enfasis xs  transparente-b blanco-t a100" style="--bg:var(--amarillo-palido30); --texto:var(--blanco);" v-on:click="$emit('notificacion',subItem.titulo,'Texto pasado desde el menu','\f36d')">
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
        <button class="boton anima logout xs enfasis bold" style="--color: var(--primario); --texto:var(--negro)">
            Cerrar sesion
        </button>
    </div>
</div>
</template>


<script setup>
import '../../css/menu.css'
import { ref } from 'vue';


    //Objeto generado con http://www.objgen.com/json/models/K66

const menu= [
    {
      "titulo": "Parametrizacion Sistema",
      "icono": "fas fa-cogs",
      "subItems": [
        {
          "titulo": "Parametros del Sistema",
          "vinculo": "",
          "elementos": [
            {
              "titulo": "Ciclos Liquidacion",
              "vinculo": ""
            },
            {
              "titulo": "Dias Festivos",
              "vinculo": ""
            },
            {
              "titulo": "Clases Servicio",
              "vinculo": ""
            },
            {
              "titulo": "Estratos",
              "vinculo": ""
            },
            {
              "titulo": "Conceptos",
              "vinculo": ""
            }
          ]
        },
        {
          "titulo": "Dominios y Estados",
          "vinculo": "",
          "elementos": [
            {
              "titulo": "Dominios",
              "vinculo": ""
            },
            {
              "titulo": "Estado",
              "vinculo": ""
            }
          ]
        },
        {
          "titulo": "Parametros de Cartera",
          "vinculo": "",
          "elementos": [
            {
              "titulo": "Parametros de Corte",
              "vinculo": ""
            },
            {
              "titulo": "Parametros Recargo",
              "vinculo": ""
            }
          ]
        },
        {
          "titulo": "Parametros Conexión",
          "vinculo": "",
          "elementos": [
            {
              "titulo": "Departamentos",
              "vinculo": ""
            },
            {
              "titulo": "Municipios",
              "vinculo": ""
            },
            {
              "titulo": "Sectores",
              "vinculo": ""
            }
          ]
        },
        {
          "titulo": "Tipos",
          "vinculo": "",
          "elementos": [
            {
              "titulo": "Tipos Instalacion",
              "vinculo": ""
            },
            {
              "titulo": "Tipos Observacion",
              "vinculo": ""
            },
            {
              "titulo": "Tipos transformador",
              "vinculo": ""
            }
          ]
        },
        {
          "titulo": "Marcas del Sistema",
          "vinculo": "",
          "elementos": [
            {
              "titulo": "Marcas Transformadores",
              "vinculo": ""
            },
            {
              "titulo": "Marcas Contadores",
              "vinculo": ""
            },
            {
              "titulo": "Norma Contadores",
              "vinculo": ""
            }
          ]
        }
      ]
    },
    {
      "titulo": "Parametrizacion Contable",
      "icono": "fas fa-file-invoice-dollar",
      "subItems": [
        {
          "titulo": "Cuenta Contable",
          "vinculo": "",
          "elementos": [
            {
              "titulo": "Cuentas",
              "vinculo": ""
            },
            {
              "titulo": "Imputaciones",
              "vinculo": ""
            }
          ]
        },
        {
          "titulo": "Combinaciones Contables",
          "vinculo": "",
          "elementos": [
            {
              "titulo": "Combinacion Contabilizacion",
              "vinculo": ""
            },
            {
              "titulo": "Combinacion Cargos",
              "vinculo": ""
            },
            {
              "titulo": "Distribucion de Costos",
              "vinculo": ""
            }
          ]
        }
      ]
    },
    {
      "titulo": "Operación periodicas",
      "icono": "fas fa-calendar-check",
      "subItems": [
        {
          "titulo": "Operaciones del Mes",
          "vinculo": "",
          "elementos": [
            {
              "titulo": "Tarifas Periodo",
              "vinculo": ""
            },
            {
              "titulo": "parametro Periodo",
              "vinculo": ""
            },
            {
              "titulo": "Costos_unitarios",
              "vinculo": ""
            }
          ]
        },
        {
          "titulo": "Operación del Ciclo",
          "vinculo": ""
        },
        {
          "titulo": "Aplicación Subsidios Regulatorios",
          "vinculo": ""
        },
        {
          "titulo": "Generacion Facturacion Sitio",
          "vinculo": ""
        },
        {
          "titulo": "Seguimiento Sitio",
          "vinculo": ""
        },
        {
          "titulo": "Generacion Formatos Regulatorios",
          "vinculo": ""
        }
      ]
    },
    {
      "titulo": "Recaudo",
      "icono": "fas fa-hand-holding-usd",
      "subItems": [
        {
          "titulo": "Bancos",
          "vinculo": ""
        },
        {
          "titulo": "Grabacion de extractos",
          "vinculo": ""
        },
        {
          "titulo": "Generacion de Archivos",
          "vinculo": ""
        },
        {
          "titulo": "Generar movimiento de tesoreria",
          "vinculo": ""
        },
        {
          "titulo": "Manejo de Acreditados",
          "vinculo": ""
        },
        {
          "titulo": "Consulta de extractos",
          "vinculo": ""
        }
      ]
    },
    {
      "titulo": "Solicitudes",
      "icono": "fas fa-user-check",
      "subItems": [
        {
          "titulo": "Nuevas personas",
          "vinculo": ""
        },
        {
          "titulo": "Nuevas Disponibilidades",
          "vinculo": ""
        },
        {
          "titulo": "Nuevas solicitudes de conexión",
          "vinculo": ""
        },
        {
          "titulo": "Autorizacion Solicitud Conexión",
          "vinculo": ""
        },
        {
          "titulo": "Parametrizacion Cuentas especiales",
          "vinculo": "",
          "elementos": [
            {
              "titulo": "Cuentas Otros Comercializadores",
              "vinculo": ""
            },
            {
              "titulo": "Periodos Carga",
              "vinculo": ""
            },
            {
              "titulo": "Autogeneradores",
              "vinculo": ""
            }
          ]
        },
        {
          "titulo": "Solicitudes Clientes",
          "vinculo": ""
        },
        {
          "titulo": "Solicitudes internas",
          "vinculo": ""
        },
        {
          "titulo": "Cuentas Embebidas XXXXX",
          "vinculo": ""
        }
      ]
    },
    {
      "titulo": "Distribucion",
      "icono": "fas fa-industry",
      "subItems": [
        {
          "titulo": "Liquidacion SAIDI SAIFI",
          "vinculo": ""
        },
        {
          "titulo": "Simuladores",
          "vinculo": ""
        },
        {
          "titulo": "Codificacion IUA - IUL",
          "vinculo": ""
        },
        {
          "titulo": "Manejo Transformadores",
          "vinculo": ""
        },
        {
          "titulo": "Consignaciones SAP",
          "vinculo": ""
        }
      ]
    },
    {
      "titulo": "Convenios de AP",
      "icono": "fas fa-hands-helping",
      "subItems": [
        {
          "titulo": "Cuentas de AP y Medidores",
          "vinculo": ""
        },
        {
          "titulo": "Manejo de CALP",
          "vinculo": ""
        },
        {
          "titulo": "Parametrizacion AP",
          "vinculo": ""
        },
        {
          "titulo": "Convenios Municipio",
          "vinculo": ""
        },
        {
          "titulo": "Autorizacion de Pagos",
          "vinculo": ""
        }
      ]
    },
    {
      "titulo": "Cartera",
      "icono": "fas fa-wallet",
      "subItems": [
        {
          "titulo": "Manejo de contratos",
          "vinculo": ""
        },
        {
          "titulo": "Cortes por gestion",
          "vinculo": ""
        },
        {
          "titulo": "Cargue de archivos",
          "vinculo": ""
        },
        {
          "titulo": "Terminacion de contratos",
          "vinculo": ""
        }
      ]
    },
    {
      "titulo": "Consulta",
      "icono": "fas fa-search",
      "subItems": [
        {
          "titulo": "Consulta clientes",
          "vinculo": ""
        },
        {
          "titulo": "Consultas por contador",
          "vinculo": ""
        },
        {
          "titulo": "Consultas cuentas agrupadas",
          "vinculo": ""
        },
        {
          "titulo": "Consulta tarifas",
          "vinculo": "",
          "elementos": [
            {
              "titulo": "Por tarifa",
              "vinculo": ""
            },
            {
              "titulo": "Por periodo",
              "vinculo": ""
            }
          ]
        },
        {
          "titulo": "Consultas distribucion",
          "vinculo": ""
        },
        {
          "titulo": "Consultas por transformador",
          "vinculo": ""
        },
        {
          "titulo": "Consulta Aliados",
          "vinculo": ""
        }
      ]
    },
    {
      "titulo": "Estadisticas",
      "icono": "fas fa-chart-bar",
      "subItems": [
        {
          "titulo": "Consumo",
          "vinculo": ""
        },
        {
          "titulo": "Ventas",
          "vinculo": ""
        },
        {
          "titulo": "Usuarios",
          "vinculo": ""
        },
        {
          "titulo": "Cartera",
          "vinculo": ""
        },
        {
          "titulo": "Informacion Financiera",
          "vinculo": ""
        }
      ]
    }
  ]
//cerrar submenus

function cerrar(){
    
    const s=document.getElementById('cerrar');
    s.checked=true;
}

//Obtener posicion menu e indicador
function getPos(e){
   const btnMenu=document.getElementById('btn-menu'+e);
   const objMenu=document.getElementById('menu'+e);
   const innerMenu=document.getElementById('innerMenu');
   const ind=document.getElementById('in'+e);
   const desplazamiento=btnMenu.offsetTop-innerMenu.scrollTop-5;
   const tam=objMenu.offsetHeight;
   const vh=window.innerHeight; 
   ind.style.top=(desplazamiento+40)+'px';
   if(desplazamiento+80+tam>vh||tam>(vh-40)/2){
       
       objMenu.style.top=null;
       objMenu.style.bottom='50px'; 
   }
   else{
        objMenu.style.bottom=null;
        objMenu.style.top=(desplazamiento)+'px'  
   }
   
    
}

//Indicadores de navegacion scroll

function scrollFunction(){
    const innerMenu=document.getElementById('innerMenu');
    const upd=document.getElementById('up');
    const downd=document.getElementById('down');
    const tam=innerMenu.scrollHeight;
    const tamC=innerMenu.clientHeight;
    if(innerMenu.scrollTop>50){
        upd.style.opacity=1;
    }
    else{
        upd.style.opacity=0;
    }

    if(innerMenu.scrollTop<tam-tamC-40){
        downd.style.opacity=1;
    }
    else{
        downd.style.opacity=0;
    }

    

}


</script>