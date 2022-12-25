import {defineStore} from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => {
        return {
            todos: []
        }
    },
    getters: {
        todoSize: (state) => state.todos.length,
        todoCompletedSize: (state) => {
            let size = 0;
            state.todos.forEach((el) => {
                if (el.status) size++
            })
            return size
        },
    },
    actions: {
        addTodo(todo) {
            this.todos.unshift(todo);
        },
        deleteTodo(id) {
            const todo = this.todos.findIndex((obj) => obj.id === id);
            if (todo > -1) {
                this.todos.splice(todo, 1);
            }
        },
        markTodo(id) {
            this.todos.map((el) => {
                if (el.id === id) {
                    el.status = !el.status
                }
            })
        }
    },
    persist: true,
})