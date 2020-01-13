import moment from "moment";
const state = {
    checkin: []


}
const getters = {
    checkedAt: state => state.checkin.checkedAt !== "" ? moment(state.checkin.checkedAt).format('MMMM Do YYYY, h:mm:ss a') : false,
    checkedOutAt: state => state.checkin.checkedOutAt !== "" ? moment(state.checkin.checkedOutAt).format('MMMM Do YYYY, h:mm:ss a') : false,
    getdate: state => state.date
}
const actions = {

}
const mutations = {
    setCheckedIn(state) {
        state.checkin.push({
            checkedAt: new Date(),
            date: new Date(new Date().toDateString()),
            checkedOutAt: ""
        })
    },
    setCheckedOut(state) {
        state.checkin[0] ={
            ...state.checkin[0],
            checkedOutAt: new Date()
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}