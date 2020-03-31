import Vue from 'vue'
import Vuex from 'vuex'
import tagsview from './modules/tagView'
import permission from './modules/permission'
import app from './modules/app'
import getters from './getter'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        tagsview,
        app,
        permission,
    },
    getters
})

export default store