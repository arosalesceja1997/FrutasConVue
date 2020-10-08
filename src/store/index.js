import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        frutas: [
            { nombre: 'Manzana', cantidad: 3, precio: 20 },
            { nombre: 'Pera', cantidad: 4, precio: 20 },
            { nombre: 'Naranja', cantidad: 10, precio: 20 },
        ]
    },
    mutations: {
        aumentar(state, index) {
            state.frutas[index].cantidad++;
        },
        reset(state, index) {
            state.frutas[index].cantidad = 0;
        },
        reiniciar(state) {
            state.frutas.forEach((fruta) => {
                fruta.cantidad = 0;
            });
        },
    },
    actions: {},
    modules: {}
})