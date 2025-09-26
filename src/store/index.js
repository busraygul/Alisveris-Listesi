import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const genId = () => (String(Date.now() + Math.random()))

export default createStore({
  state: () => ({
    items: []
  }),

  getters: {
    items: (state) => state.items,
    total: (state) => state.items.length,
    doneCount: (state) => state.items.filter(i => i.done).length

  },

  mutations: {
    ADD_ITEM(state, text) {
      const v = String(text).trim()
      if (!v) return
      const upper = v.toLocaleUpperCase('tr-TR');
      state.items.push({ id: genId(), text: upper, done: false });
    },
    TOGGLE_ITEM(state, id) {
      const it = state.items.find(i => i.id === id)
      if (it) it.done = !it.done
    },
    REMOVE_ITEM(state, id) {
      state.items = state.items.filter(i => i.id !== id)
    }
  },

  plugins: [
    createPersistedState({
      key: 'app.v1',          // localStorage anahtarı
      paths: ['items'] // SADECE bunları kalıcı yap
      // storage belirtmezsen default: window.localStorage
    })
  ]
})
