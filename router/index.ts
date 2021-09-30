import { createRouter, createWebHistory } from "vue-router"
import Game from "@/views/Game.vue"
import Socket from "@/views/Socket.vue"

const routes:any = [
  {
    path:"/game",
    component:Game
  },
  {
    path:"/socket",
    component:Socket
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})
export default router
