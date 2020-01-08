<template>

  <v-data-table
    :UserName ="Name"
    :E-mail="e-mail"
    :items--page="5"
    class="elevation-1"
  ></v-data-table>
</template>


<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'E-mail', value: 'email' },
          { text: 'User-id ', value: 'ID' },
          /* { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }, */
        ],
        UserName: [
          {
            name: 'Frozen Yogurt',
            email:'abc@gmail.com',
            ID: 159,
          },
          {
            name: 'Frozen Yogurt',
            email:'',
            ID: 159,
          },
          {
            name: 'Frozen Yogurt',
            email:'',
            ID: 159,
          },
          {
            name: 'Frozen Yogurt',
            email:'',
            ID: 159,
          }
         
        ]
      }
    }
  }
</script>






<style scoped>

</style>