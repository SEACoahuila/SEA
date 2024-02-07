import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'Store' // Cambia esto al nombre que quieras
  })(store)

}

