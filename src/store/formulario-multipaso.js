// http://www.objgen.com/json/models/5LTjm
import { reactive,ref } from "vue"
import { defineStore} from "pinia";

export const usePasosStore = defineStore("multipasos", ()=>{

const pasos=ref([
    {
      "titulo": "Datos Solicitud disponibilidad",
      "numero": "0",
      "estado": "",
      "tipo":"labels",
      
      "elementos": [
        {
          "etiqueta": "Propietario",
          "valor": "texto",
          "tipo_campo": "label", 
          "icono":"fa-solid fa-user",
        },
        {
          "etiqueta": "Documento de identidad",
          "valor": "000000",
          "tipo_campo": "label",
          "sizel": "s",
         
          "icono":"fa-solid fa-id-card",
        },
        {
          "etiqueta": "Telefono celular",
          "valor": "315-000",
          "tipo_campo": "label",
          "sizel": "s",
          "icono":"fa-solid fa-phone",
        },
        {
          "etiqueta": "Correo electronico",
          "valor": "ejemplo_correo_largo@correo.com",
          "tipo_campo": "label",
          "sizel": "m",
         
          "icono":"fa-solid fa-envelope",
        },
        {
          "etiqueta": "Departamento predio",
          "valor": "Departamento",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-map",
        },
        {
          "etiqueta": "Municipio predio",
          "valor": "Municipio",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-m",
          "icono":"fa-solid fa-map",
        },
        {
          "etiqueta": "Ubicacion predio",
          "valor": "Ubicacion",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-map-pin",
        },
        {
          "etiqueta": "Direccion",
          "valor": "Direccion",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-signs-post",
        },
        {
          "etiqueta": "Fecha",
          "valor": "Fecha",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-calendar-day",
        },
        {
          "etiqueta": "Tipo conexion",
          "valor": "Tipo",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-plug",
        },
        {
          "etiqueta": "Nivel Tension",
          "valor": "Nivel",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-bolt",
        },
        {
          "etiqueta": "Nodo trafo",
          "valor": "Nodo",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-circle-nodes",
        },
        {
          "etiqueta": "Nodo electrico",
          "valor": "Nodo",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-circle-nodes",
        },
        {
          "etiqueta": "Tipo instalacion",
          "valor": "Tipo",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-clipboard-check",
        },
        {
          "etiqueta": "Tipo instalacion",
          "valor": "Tipo",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-clipboard-check",
        },
        {
          "etiqueta": "Carga contratada",
          "valor": "Carga",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-file-invoice-dollar",
        },
        {
          "etiqueta": "Carga aprobada",
          "valor": "Carga",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-circle-check",
        },
        {
          "etiqueta": "Modalidad de cobro",
          "valor": "Modalidad",
          "tipo_campo": "label",
          "sizel": "s",
          "sizeh":"divh-s",
          "icono":"fa-solid fa-money-bill-transfer",
        },
        
        
      ]
    },
    {
        "titulo": "Datos Cuenta",
        "numero": "1",
        "estado": "",
        "tipo":"formulario",
        "elementos": [
          {
            "etiqueta": "Sector",
            "valor": "Selecciona una opcion",
            "tipo_campo": "dropdown",
            "alerta": "texto informativo para el usuario",
            "opciones": [
              {
                "titulo_opcion": "Opcion 1",
                "value": "opcion1"
              },
              {
                "titulo_opcion": "Opcion 2",
                "value": "opcion2"
              }
            ]
          },
          {
            "etiqueta": "Codigo Postal",
            "valor": "Selecciona una opcion",
            "tipo_campo": "dropdown",
            "alerta": "texto informativo para el usuario",
            "opciones": [
              {
                "titulo_opcion": "Opcion 1",
                "value": "opcion1"
              },
              {
                "titulo_opcion": "Opcion 2",
                "value": "opcion2"
              }
            ]
          },
          {
            "etiqueta": "Codigo de ruta",
            "valor": "Codigo",
            "tipo_campo": "input text",
            "alerta": "texto informativo para el usuario",
            "icono":"fa-solid fa-route",
          }
          ,
          { 
            "etiqueta":"Etiqueta campo switch",
            "valor":"",
            "tipo_campo":"switch",
            "opciones":[
              {
                "etiqueta": "¿Lectura obligatoria?",
                "valor": "Lectura",
                "alerta": "texto informativo para el usuario",
                "checked":"false",
                "error":"false",
                "mensaje_error":"",
              },
              {
                "etiqueta": "Agrupada",
                "valor": "Lectura",
                "alerta": "texto informativo para el usuario",
                "checked":"false",
                "error":"false",
                "mensaje_error":"",
              }
            ]
            
          },
          {
            "etiqueta": "Actividad SIE",
            "valor": "Actividad",
            "tipo_campo": "dropdown",
            "alerta": "texto informativo para el usuario",
            "opciones": [
              {
                "titulo_opcion": "Opcion 1",
                "value": "opcion1"
              },
              {
                "titulo_opcion": "Opcion 2",
                "value": "opcion2"
              }
            ]
          }
          ,
          {
            "etiqueta": "Actividad CIIU",
            "valor": "Actividad",
            "tipo_campo": "dropdown",
            "alerta": "texto informativo para el usuario",
            "opciones": [
              {
                "titulo_opcion": "Opcion 1",
                "value": "opcion1"
              },
              {
                "titulo_opcion": "Opcion 2",
                "value": "opcion2"
              }
            ]
          },
          {
            "etiqueta": "Area Comun",
            "valor": "Codigo",
            "tipo_campo": "input text",
            "alerta": "texto informativo para el usuario",
            "icono":"fa-solid fa-box",
          }
          ,
          {
            "etiqueta": "Numero de familias",
            "valor": "Codigo",
            "tipo_campo": "input text",
            "alerta": "texto informativo para el usuario",
            "icono":"fa-solid fa-users",
          }
          ,
          { 
            "etiqueta":"Etiqueta campo switch",
            "valor":"",
            "tipo_campo":"switch",
            "opciones":[
              {
                "etiqueta": "Autorizacion aliados",
                "valor": "Lectura",
                "alerta": "texto informativo para el usuario",
                "checked":"false",
                "error":"false",
                "mensaje_error":"",
              },
              {
                "etiqueta": "Nuevos servicios",
                "valor": "Lectura",
                "alerta": "texto informativo para el usuario",
                "checked":"false",
                "error":"false",
                "mensaje_error":"",
              }
            ]
            
          },
          { 
            "etiqueta":"Etiqueta campo switch",
            "valor":"",
            "tipo_campo":"switch",
            "opciones":[
              {
                "etiqueta": "Autorizacion electronica",
                "valor": "Lectura",
                "alerta": "texto informativo para el usuario",
                "checked":"false",
                "error":"false",
                "mensaje_error":"",
              },
              {
                "etiqueta": "Autorizaciones EBSA",
                "valor": "Lectura",
                "alerta": "texto informativo para el usuario",
                "checked":"false",
                "error":"false",
                "mensaje_error":"",
              }
            ]
            
          },
          {
            "etiqueta": "Longitud",
            "valor": "Codigo",
            "tipo_campo": "input text",
            "alerta": "texto informativo para el usuario",
            "icono":"fa-solid fa-ruler-horizontal",
          }
          ,
          {
            "etiqueta": "Latitud",
            "valor": "Codigo",
            "tipo_campo": "input text",
            "alerta": "texto informativo para el usuario",
            "icono":"fa-solid fa-ruler",
          }
          ,
          {
            "etiqueta": "Altura",
            "valor": "Codigo",
            "tipo_campo": "input text",
            "alerta": "texto informativo para el usuario",
            "icono":"fa-solid fa-ruler-vertical",
          }
          ,
          {
            "etiqueta": "Mercado         ",
            "valor": "valor",
            "tipo_campo": "select button",
            "size": "div-s",
            "alerta": "texto informativo para el usuario",
            "error":"false",
            "mensaje_error":"",
            "opciones": [
              {
                "titulo_opcion": "NR",
                "value": "nr"
              },
              {
                "titulo_opcion": "R",
                "value": "r"
              }
            ]
          }
          ,
          {
            "etiqueta": "ID Mercado",
            "valor": "Codigo",
            "tipo_campo": "input text",
            "alerta": "texto informativo para el usuario",
            "icono":"fa-solid fa-bullseye",
          }
          ,
          {
            "etiqueta": "Observacion                                 ",
            "valor": "Codigo",
            "tipo_campo": "input text",
            "alerta": "texto informativo para el usuario",
            "icono":"fa-solid fa-pen-to-square",
          }
          ,
        ]
      },
      {
        "titulo": "Datos instalacion",
        "numero": "2",
        "estado": "",
        "tipo":"formulario",
        "elementos": [
          { 
            "etiqueta":"Etiqueta campo switch",
            "valor":"",
            "tipo_campo":"switch",
            "opciones":[
              {
                "etiqueta": "¿Conexion Transformador?",
                "requerido":"true",
                "valor": "Lectura",
                "alerta": "texto informativo para el usuario",
                "checked":"false",
                "error":"false",
                "mensaje_error":"",
              },
              {
                "etiqueta": "¿Unica conexion?",
                "requerido":"true",
                "valor": "Lectura",
                "alerta": "texto informativo para el usuario",
                "checked":"false",
                "error":"false",
                "mensaje_error":"",
              }
              
            ]
            
          },
          { 
            "etiqueta":"Etiqueta campo switch",
            "valor":"",
            "tipo_campo":"switch",
            "opciones":[
              {
                "etiqueta": "¿Con contador?",
                "requerido":"true",
                "valor": "Lectura",
                "alerta": "texto informativo para el usuario",
                "checked":"false",
                "error":"false",
                "mensaje_error":"",
              },
              {
                "etiqueta": "¿Estimar demanda?",
                "requerido":"true",
                "valor": "Lectura",
                "alerta": "texto informativo para el usuario",
                "checked":"false",
                "error":"false",
                "mensaje_error":"",
              }
              
            ]
            
          },
          { 
            "etiqueta":"Etiqueta campo switch",
            "valor":"",
            "tipo_campo":"switch",
            "opciones":[
              {
                "etiqueta": "¿Conexion Reactiva?",
                "requerido":"true",
                "valor": "Lectura",
                "alerta": "texto informativo para el usuario",
                "checked":"false",
                "error":"false",
                "mensaje_error":"",
              },
              
            ]
            
          },
          {
            "etiqueta": "Fases",
            "valor": "Actividad",
            "tipo_campo": "dropdown",
            "alerta": "texto informativo para el usuario",
            "opciones": [
              {
                "titulo_opcion": "Opcion 1",
                "value": "opcion1"
              },
              {
                "titulo_opcion": "Opcion 2",
                "value": "opcion2"
              }
            ]
          },
          {
            "etiqueta": "Diametro tubo en (cm)",
            "valor": "Diametro",
            "tipo_campo": "input text",
            "alerta": "texto informativo para el usuario",
            "icono":"fa-solid fa-route",
          }
          ,
          {
            "etiqueta": "Calibre conductor acometida",
            "valor": "Actividad",
            "tipo_campo": "dropdown",
            "alerta": "texto informativo para el usuario",
            "opciones": [
              {
                "titulo_opcion": "Opcion 1",
                "value": "opcion1"
              },
              {
                "titulo_opcion": "Opcion 2",
                "value": "opcion2"
              }
            ]
          },
          {
            "etiqueta": "Electricista",
            "valor": "Actividad",
            "tipo_campo": "dropdown",
            "alerta": "texto informativo para el usuario",
            "opciones": [
              {
                "titulo_opcion": "Opcion 1",
                "value": "opcion1"
              },
              {
                "titulo_opcion": "Opcion 2",
                "value": "opcion2"
              }
            ]
          },
        ]
      }
  ])
return{
    pasos
}
})





/*

{
          "etiqueta": "Propietario",
          "requerido":"false",
          "valor": "texto",
          "tipo_campo": "label",
          "disabled":"true",
          "size": "div-s",
          "alerta": "texto informativo para el usuario",
          "icono":"fas fa-address-book",
          "mensaje_info":"Texto de informacion",
          "error":"false",
          "mensaje_error":"Texto de error",
          "placeholder":"Ingrese un nombre",
          "opciones": [
            {
              "titulo_opcion": "titulo de la opcion",
              "value": "opcion1"
            }
          ]
        },





        {
          "etiqueta": "Tipo conexion",
          "valor": "valor",
          "tipo_campo": "dropdown",
          "sizel": "m",
          "alerta": "texto informativo para el usuario",
          "opciones": [
            {
              "titulo_opcion": "titulo de la opcion 123 dlkj sdlj lsdf",
              "value": "valor opcion  1"
            },
            {
              "titulo_opcion": "titulo de la opcion",
              "value": "valor opcion 2 "
            },
            {
              "titulo_opcion": "titulo de la opcion",
              "value": "valor opcion 3"
            }
          ]
        }
        ,
        {
          "etiqueta": "Titulo etiqueta",
          "valor": "valor",
          "tipo_campo": "select button",
          "size": "div-s",
          "alerta": "texto informativo para el usuario",
          "error":"true",
          "mensaje_error":"Texto de error",
          "opciones": [
            {
              "titulo_opcion": "Si",
              "value": "valor opcion"
            },
            {
              "titulo_opcion": "No",
              "value": "valor opcion"
            }
          ]
        }
        ,
        {
          "etiqueta": "Titulo etiqueta",
          "valor": "valor",
          "tipo_campo": "upload",
          "size": "div-m",
          "alerta": "texto informativo para el usuario",
          "error":"true",
          "mensaje_error":"Texto de error",
          "opciones": [
            {
              "titulo_opcion": "titulo de la opcion",
              "valor_opcion": "valor opcion"
            }
          ]
        }
        ,
        {
          "etiqueta": "Titulo etiqueta",
          "valor": "valor",
          "tipo_campo": "input",
          "size": "m",
          "alerta": "texto informativo para el usuario",
          "opciones": [
            {
              "titulo_opcion": "titulo de la opcion",
              "valor_opcion": "valor opcion"
            }
          ]
        }
        ,

{
          "etiqueta": "Titulo etiqueta",
          "valor": "valor",
          "tipo_campo": "input",
          "size": "m",
          "alerta": "texto informativo para el usuario",
          "opciones": [
            {
              "titulo_opcion": "titulo de la opcion",
              "valor_opcion": "valor opcion"
            }
          ]
        }
*/