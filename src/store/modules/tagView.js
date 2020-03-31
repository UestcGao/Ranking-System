const tagsview = {
    state: {
        visitedviews:[]
    },
    mutations: {
        ADD_VISITED_VIEWS: (state, view) => {
            state.visitedviews.push({
                name: view.name,
                path: view.path,
                title:view.meta.title || 'no-title'
            })
        },
        DEL_VISITED_VIEWS: (state, view) => {
            for (let [i, v] of state.visitedviews.entries()) {
                if (v.path === view.path) {
                    state.visitedviews.splice(i, 1)
                    break
                }
            }
        }
    },
    actions: {
        addVisitedViews({ commit }, view) {
            commit('ADD_VISITED_VIEWS',view)
        },
        delVisitedViews({ commit,state }, view) {
            return new Promise((resolve) => {
                // commit('')
                commit('DEL_VISITED_VIEWS', view)
                resolve([...state.visitedviews])
            })
        }
    }
}

export default tagsview