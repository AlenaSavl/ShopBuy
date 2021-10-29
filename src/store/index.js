import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartdata: [],
    database: [],
    modals: {
      modalIsOpen: false,
      modalPayload: {}
    }
  },
  mutations: {
    addAllProducts(state) {
      axios.get('https://fakestoreapi.com/products').then(resp => {
        state.database = resp.data;
      });
    },
    addProductToCart(state, product) {
      state.cartdata.push(product);
      localStorage.setItem('localCartData', JSON.stringify(state.cartdata));
    },
    deleteProductInCart(state, product) {
      let result = state.cartdata.findIndex((item, key) => {
        return product.id === item.id;
      });
      console.log('result', result);
      if (typeof result !== 'undefined') {
        state.cartdata.splice(result, 1);
        localStorage.setItem('localCartData', JSON.stringify(state.cartdata));
      }
    },
    sortByCategory(state, category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => state.database = json)
    },
  },
  actions: {
    addAllProducts: (context) => {
      context.commit('addAllProducts');
    },
    addProductToCart: (context, product) => {
      context.commit('addProductToCart', product);
    },
    deleteProductInCart: (context, product) => {
      context.commit('deleteProductInCart', product);
    },
    sortByCategory: (context, category) => {
      context.commit('sortByCategory', category);
    },

  },
  modules: {
  },
  getters: {
    getCartdata(state) {
      return state.cartdata;
    },
    getDatabase(state) {
      return state.database;
    },
  }
})

