const state={
    
        authenticated: false  
}

const getters={
    getauthenticated:(state)=>state.authenticated,
}

const action={}

const mutations={
    setAuthentication(state, status) {
        state.authenticated = status;
    }

}

export default {
    namespaced:true,
    state,getters,action,mutations
    }