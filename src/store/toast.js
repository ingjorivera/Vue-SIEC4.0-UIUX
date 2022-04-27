import { useToast } from 'primevue/usetoast'
import { defineStore } from 'pinia'
import { nextTick,ref } from 'vue'

export const useStoreToast = defineStore('toastd',()=>{

    const toast = useToast()
    const visibleLeft=ref(false)

    const muestraNotificacion=(titulo,texto)=>{
        toast.add({severity:'info', summary:titulo, detail:texto})
        nextTick(() =>{
        const now = new Date();
        const not=document.querySelectorAll('.p-toast-message')
        const mes=not[not.length-1].querySelector('.p-toast-detail')
        const ic=not[not.length-1].querySelector('.p-toast-message-icon')
       
        const withPmAm = now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        });
   
        mes.setAttribute('tiempo',withPmAm);
        ic.setAttribute('icon','\f36d')
   
        })
       
      }
    return{
            visibleLeft,
            muestraNotificacion,
    }

})
