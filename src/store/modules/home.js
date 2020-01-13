const state={
    Users:
        [ {
            id:1,
             name:'Admin',
             email:'admin@gmail.com',
             password:'a'
          }
        ],
        signinedIn:false
       

};
const getters={
  allusers:(state)=>state.Users,
  signinedIn:state=>state.signinedIn
};
const action={

};
const mutations={
  setState:(state,payload) => {
    /** {signedIn:true} */
   state.users=payload;
  },
  
}

export default {
state,getters,action,mutations
}