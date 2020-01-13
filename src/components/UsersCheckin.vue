<template>
<v-container fill-height>
<v-card min-width="320">
      <v-card-title>Check-In Here</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
         <div>
            <p v-if="checkedAt!==false" class>Your Check-in: {{checkedAt}}</p>
            <p v-else>Not Checked In</p>
            <p v-if="checkedOutAt!==false">your check-Out {{checkedOutAt}}</p>
            <p v-else>Not Checked Out</p>
         </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="pb-4 pl-4 pt-4">
         <v-btn
         @click="setCheckedIn"
         v-if="true/*checkedAt === false || checkedOutAt !==false*/"
         :disabled="false /*checkedOutAt!==false*/"
         >
         <p>CheckIn</p>
         </v-btn>
         <v-btn
         @click="setCheckedOut"
         v-else
         >
      
            <p>Checkout</p>
         </v-btn>
      </v-card-actions>
   </v-card>


</v-container>
</template>


<script>
import moment from 'moment';
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    methods:{
      ...mapActions("attendance",['setCheckedIn','setCheckedOut']),
    },
    computed:{
      ...mapGetters("attendance",['checkedAt','checkedOutAt','getdate']),
    },
    created(){
      // let date=new Date(this.getdate)
      // let currentdate=new Date()
      // if (date===currentdate) {
        
      // }
      this.$store.dispatch("attendance/checkUsersCheckin")
    }
}
</script>