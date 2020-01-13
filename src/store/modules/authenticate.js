const state={
    
        authenticated: false,
        currentUser:{}
}

const getters={
    getauthenticated:(state)=>state.authenticated,
    getCurrentUser:(state)=>state.currentUser,
}

const action={}

const mutations={
    setAuthentication(state, status) {
        state.authenticated = status;
    },
    setCurrentUser(state,user){
      state.currentUser=user
    }

}

export default {
    namespaced:true,
    state,getters,action,mutations
    }