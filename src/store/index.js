import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

import home from "./modules/home"
import users from "./modules/users"
import  authenticate  from "./modules/authenticate";
import attendance from "./modules/attendance"

/* console.log("att",attendance)
 */

export default new Vuex.Store({
  
  plugins: [createPersistedState()],
  modules: {
    home,users,authenticate,attendance
  }
})
