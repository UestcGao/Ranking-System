const app = {
    namespaced: true,
    state: {
        sidebar: false,
        language: 'zh',
        size: 'mini',
        bread: true, // auto show tagsView，when true show breadcrumd
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar = !state.sidebar
        },
        CLOSE_SIDEBAR: (state) => {
            state.sidebar = false
        },
        SET_LANGUAGE: (state, language) => {
            state.language = language
        },
        SET_SIZE: (state, size) => {
            state.size = size
        },
    },
    actions: {
        toggleSideBar({ commit, }) {
            commit('TOGGLE_SIDEBAR')
        },
        closeSideBar({ commit, }, { withoutAnimation, }) {
            commit('CLOSE_SIDEBAR', withoutAnimation)
        },
        setLanguage({ commit, }, language) {
            commit('SET_LANGUAGE', language)
        },
        setSize({ commit, }, size) {
            commit('SET_SIZE', size)
        },
    },
}

export default app
