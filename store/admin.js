export const state = () => ({

})

export const actions = {
  admin_action({ rootState, commit }) {
    
    // TODO 3 - how can i use saved token here
    // in order to make requests to some API
    // endpoint?
    console.log('in admin action with auth token: ' + rootState.auth.userToken)
  }
}

export const mutations = {

}

export const getters = {

}
