const state = {
  signinedIn:false,
  people: [
    {
      id:0,
      name:'Admin',
      email:'admin@gmail.com',
      password:'12345'
   },
    
  ]
  
};
const getters = {
  tabledata: state => state.people,
  allusers:(state)=>state.people,
  signinedIn:state=>state.signinedIn
  
  
};
const action = {};
const mutations = {
  /*  setstate:(state,people)=>   (state.people=people) */
  addPeople(state, value) {
    state.people.push(value);
  },
  deletepeople(state,item){
    const index = state.people.indexOf(item);
       
    state.people.splice(index, 1);
  },
  updatePeople(state,item){
    let u=state.people.findIndex(u=>u.id===item.id)
    state.people[u]=item
    
  },
  addPassword(state,pass){
    state.people.password.push(pass)
  },
  setState:(state,payload) => {
    /** {signedIn:true} */
    state.people=payload;
  }
  
  

};

export default {
  namespaced: true,
  state,
  getters,
  action,
  mutations
};
