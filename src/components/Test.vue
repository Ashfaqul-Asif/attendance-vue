<template>
  <v-data-table
    :headers="headers"
    :items="userAttendance"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
 import {mapGetters} from "vuex"
  export default {
    data () {
      return {
        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: false,
            value: 'id',
          },
          { text: 'Checked in Time', value: 'checkedAt' },
          { text: 'Checked out Time', value: 'checkedOutAt' },
          { text: 'Date', value: 'date' },
          
        ],
        
      }
    },
    computed:{
            ...mapGetters("attendance", ["userAttendance"])
        }
  }
</script>

<style>

</style>