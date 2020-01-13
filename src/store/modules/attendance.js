import moment from "moment";
const state = {
    checkin: [
       /*  {
            id:0,
            checkedAt:"12121121",
            checkedOutAt:"164646466",
            date:"545454"
        },
        {
            id:2,
            checkedAt:"12121121",
            checkedOutAt:"164646466",
            date:"545454"
        },
        {
            id:3,
            checkedAt:"12121121",
            checkedOutAt:"164646466",
            date:"545454"
        } */

    ],
    usersCheckin:{}
}
const getters = {
    checkedAt: state => state.checkin.checkedAt !== "" ? moment(state.checkin.checkedAt).format('MMMM Do YYYY, h:mm:ss a') : false,
    checkedOutAt: state => state.checkin.checkedOutAt !== "" ? moment(state.checkin.checkedOutAt).format('MMMM Do YYYY, h:mm:ss a') : false,
    getdate: state => state.date

}
const actions = {
    checkUsersCheckin:({commit,rootState,state})=>{
        var y=rootState.authenticate.currentUserID
        var x= state.checkin.filter(a=>a.id===y)
        console.log(x);
      
        commit("setusersCheckin",x);
      },
      setCheckedIn:({commit,rootState})=>{
        
            var x={
                id:rootState.authenticate.currentUserID,
                checkedAt:Date.now(),
                date:new Date(new Date().toDateString()).getTime(),
                checkedOutAt:false,
            }
            console.log(x);
           commit("setCheckedIn",x)
      },
      setCheckedOut:({commit})=>{
         
      }
      
     
      
}
const mutations = {
    setCheckedIn(state,payload) {
        state.checkin.push(payload)
    },
    setCheckedOut(state) {
        state.checkin[0] ={
            ...state.checkin[0],
            checkedOutAt: new Date()
        }
    },
    setusersCheckin(state,payload) {
        state.usersCheckin=payload
    }
    

    
    
    
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}