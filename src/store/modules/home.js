const state={
    Users:
        [ {
            id:1,
             name:'Admin',
             email:'admin@gmail.com',
             password:'a'
          }
        ]
       

};
const getters={
  allusers:(state)=>state.Users
};
const action={

};
const mutations={

}

export default {
state,getters,action,mutations
}