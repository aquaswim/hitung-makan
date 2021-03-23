import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    calculated: false,
    calculatedPayment: []
  },
  mutations: {
    setCalculatedPayment(state, calculatedPayment) {
      state.calculatedPayment = calculatedPayment;
      state.calculated= true;
    },
    resetCalculatedPayment(state){
      state.calculated= false;
      state.calculatedPayment = [];
    }
  }
});

export default store;
