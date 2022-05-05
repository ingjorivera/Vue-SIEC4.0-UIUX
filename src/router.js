import { createRouter, createWebHistory } from "vue-router";
import SolicitudConexion from "./paginas/SolicitudDeConexion.vue";

const routes=[
    {
        path:"/solicitud-conexion",
        name:'Solicitud de conexion',
        component:SolicitudConexion
    }
]

const history= createWebHistory()
const router=createRouter({
    history,
    routes
})

export default router