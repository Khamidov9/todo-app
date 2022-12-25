import { createRouter, createWebHistory } from "vue-router";
import { useTodoStore } from "@/store/todo"

const routes = [
    { path: '/', name: 'home', component: () => import('@/views/Home.vue')},
    { path: '/todo', name: 'todo', component: () => import('@/views/Todo.vue')},
]


const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to) => {
    // if not SSR
  const store = useTodoStore()
})

export default router