import moment from "moment";
const state = {
    checkin: [],
    usersCheckin: null
}
const getters = {
    checkedAt: state => {
        return state.usersCheckin !== null
            ? moment(state.usersCheckin.checkedAt).format('MMMM Do YYYY, h:mm:ss a')
            : false
    },
    checkedOutAt: state => {
        return state.usersCheckin !== null && state.usersCheckin.checkedOutAt !== false
            ? moment(state.usersCheckin.checkedOutAt).format('MMMM Do YYYY, h:mm:ss a')
            : false
    },
    userAttendance:(state)=>state.checkin
}
const actions = {
    checkUsersCheckin: ({ commit, rootState, state }) => {
        var id = rootState.authenticate.currentUserID
        const today = new Date(new Date().toDateString()).getTime();
        var x = state.checkin.length !== 0 ? state.checkin.find(a => a.id === id && a.date === today) : null
        commit('setusersCheckin', x ? x : null)
    },
    setCheckedIn: ({ commit, rootState }) => {
        var x = {
            id: rootState.authenticate.currentUserID,
            checkedAt: Date.now(),
            date: new Date(new Date().toDateString()).getTime(),
            checkedOutAt: false,
        }
        commit("setCheckedIn", x )
    },
    setCheckedOut: ({ commit, rootState }) => {
        var id = rootState.authenticate.currentUserID
        const today = new Date(new Date().toDateString()).getTime();
        commit('setCheckedOut', { id, today })
    }
}
const mutations = {
    setCheckedIn(state, payload) {
        state.checkin.push(payload)
        state.usersCheckin = payload
    },
    setCheckedOut(state, payload) {
        state.checkin.forEach(x => {
            if (x.id === payload.id && x.date === payload.today) {
                x.checkedOutAt = Date.now()
            }
        });
        state.usersCheckin.checkedOutAt = Date.now()
    },
    setusersCheckin(state, payload) {
        state.usersCheckin = payload
    },
    resetUsersCheckin(state) {
        state.usersCheckin = null
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
 


