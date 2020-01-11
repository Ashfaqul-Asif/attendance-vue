import store from "../store";

export default {
  computed: {
    highestid() {
      let people = store.getters["users/tabledata"];
      return people.map(i => i.id).sort((a, b) => (a > b ? 1 : -1))[
        people.length - 1
      ];
    }
  }
};
