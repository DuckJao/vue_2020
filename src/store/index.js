import Vue from 'vue'
import Vuex from 'vuex'
// import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  // modules,
  state: {
    res: {},
    type: 0,
  },
  getters: {

  },
  mutations: {
    SET_TYPE(state, payload) {
      state.type = payload
      console.log('##store## state.type: ', state.type)
    },
    SET_RESPONSE(state, payload) {
      state.res = payload
      console.log('##store## state.res: ', state.res)
    }
  },
  actions: {
    getData(context) {
      const source = 'http://localhost:8080/data/vuex.json'
      fetch( source )
        .then(
          ( response ) => {
            // 這裡response是一個 ReadableStream 的物件
            // 使用不同資料類型使用對應方法，才能正確取得資料物件：blob()、json()、text()
            // console.log( '###response:', response )

            // json()將response改成json物件
            return response.json() // 要用return才會往下丟不然下面沒東西
          }
        )
        .then(
          ( data ) => {
            context.commit('SET_RESPONSE', data.res )
            // this.json = JSON.parse( JSON.stringify( response ) )
            // this.$store.commit('SET_RESPONSE', this.json.res)
            // this.dataParser()

          }
        )
    },
  },
})

export default store
