const state = {
  people: [
    {
      name: "Frozen Yogurt",
      email: 159,
      id: 6.0
    },
    {
      name: "Ice cream sandwich",
      email: 237,
      id: 9.0
    },
    {
      name: "Eclair",
      email: 262,
      id: 16.0
    },
    {
      name: "Cupcake",
      email: 305,
      id: 3.7
    },
    {
      name: "Jelly bean",
      email: 375,
      id: 0.0
    },
    {
      name: "Lollipop",
      email: 392,
      id: 0.2
    },
    {
      name: "Honeycomb",
      email: 408,
      id: 3.2
    },
    {
      name: "Donut",
      email: 452,
      id: 25.0
    },
    {
      name: "KitKat",
      email: 518,
      id: 26.0
    }
  ]
};
const getters = {
  tabledata: state => state.people
};
const action = {};
const mutations = {
  /*  setstate:(state,people)=>   (state.people=people) */
  addPeople(state, value) {
    state.people.push(value);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  action,
  mutations
};
