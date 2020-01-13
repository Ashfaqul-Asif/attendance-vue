const state={
    
        authenticated: false,
        currentUserID:null
}

const getters={
    getauthenticated:(state)=>state.authenticated,
    getcurrentUserID:(state)=>state.currentUserID,
}

const action={}

const mutations={
    setAuthentication(state, status) {
        state.authenticated = status;
    },
    setcurrentUserID(state,userId){
      state.currentUserID=userId
    },
    resetState:(state)=>{
        state.authenticated=false;
        state.currentUserID=null
    }
}

export default {
    namespaced:true,
    state,getters,action,mutations
    }