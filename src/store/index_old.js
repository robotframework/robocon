export default createStore({
  state: {
    isMobile: null,
    isDesktop: null,
    pages: []
  },
  mutations: {
    SET_IS_MOBILE(state, truthiness) {
      state.isMobile = truthiness
    },
    SET_IS_DESKTOP(state, truthiness) {
      state.isDesktop = truthiness
    },
    SET_CONTENT(state, { pages = [] }) {
      state.pages = pages
    }
  },
  actions: {
  },
  modules: {
  }
})
