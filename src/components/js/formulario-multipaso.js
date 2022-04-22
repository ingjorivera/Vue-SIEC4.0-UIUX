// http://www.objgen.com/json/models/5LTjm

import { reactive } from "vue"

const pasos=reactive([
    {
      "titulo": "Nombre de paso",
      "numero": "0",
      "estado": "Exito",
      
      "elementos": [
        {
          "etiqueta": "Titulo etiqueta",
          "valor": "valor",
          "tipo_campo": "input",
          "size": "m",
          "alerta": "texto informativo para el usuario",
          "icono":"f007",
          "opciones": [
            {
              "titulo_opcion": "titulo de la opcion",
              "valor_opcion": "valor opcion"
            }
          ]
        },
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
      ]
    },
    {
        "titulo": "Titulo del paso",
        "numero": "1",
        "estado": "Error",
        "elementos": [
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
        ]
      }
  ])
export default{
    pasos:pasos
}