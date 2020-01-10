const state = {
  people: [
    {
      name: "Frozen Yogurt",
      email: 159,
      id: 1
    },
    {
      name: "Ice cream sandwich",
      email: 237,
      id: 2
    },
    {
      name: "Eclair",
      email: 262,
      id: 3
    },
    {
      name: "Cupcake",
      email: 305,
      id: 4
    },
    {
      name: "Jelly bean",
      email: 375,
      id: 5
    },
    {
      name: "Lollipop",
      email: 392,
      id: 6
    },
    {
      name: "Honeycomb",
      email: 408,
      id: 7
    },
    {
      name: "Donut",
      email: 452,
      id: 8
    },
    {
      name: "KitKat",
      email: 518,
      id: 9
    }
  ]
};
const getters = {
  tabledata: state => state.people,
  highestid:state => ((state.people.map(i=>i.id)).sort())[state.people.length-1]
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  action,
  mutations
};
