
<template>
  <v-data-table :headers="headers" :items="userAttendance" :items-per-page="5" class="elevation-1">
    <template v-slot:item.checkedAt="{ item }">
      <span>{{formatdate(item?item.checkedAt:item)}}</span>
    </template>
    <template v-slot:item.checkedOutAt="{ item }">
      <span>{{formatdate(item?item.checkedOutAt:item)}}</span>
    </template>
    <template v-slot:item.date="{ item }">
      <span>{{formatdate(item?item.date:item)}}</span>
    </template>
  </v-data-table>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "Checked in Time", value: "checkedAt" },
        { text: "Checked out Time", value: "checkedOutAt" },
        { text: "Date", value: "date" }
      ]
    };
  },
  methods: {
    formatdate: x => {
      console.log(x);
      if (x != null) {
        return moment(x).format("MMMM Do YYYY, h:mm:ss a");
      } else return "";
    }
  },
  computed: {
    ...mapGetters("attendance", ["userAttendance"])
  }
};
</script>

<style>
</style>