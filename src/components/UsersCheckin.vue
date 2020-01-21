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
        <v-btn @click="setCheckedIn" v-if="checkedAt === false || checkedOutAt !==false  "
          :disabled="checkedOutAt!==false || !validlocation" >
          <p>CheckIn{{validlocation}}</p>
        </v-btn>
        <v-btn @click="setCheckedOut" v-else>
          <p>Checkout</p>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
  import moment from "moment";
  import {
    mapActions,
    mapGetters,
    mapMutations
  } from "vuex";
  export default {
    data() {
      return {
        lat:'',
        lang:'',
        geoLoca: [],
        desLocation: {
          latitude: 22.7748, //23.774741
          longitude: 90.36542960000001, //90.36542960000001
       /*    maxLocation() {
            return {
              latitude: this.latitude + 0.00004,
              longitude: this.longitude + 0.00001
            }
          } */
        }
      }
    },
    methods: {
      location () {
        if ('geolocation' in navigator) {
          let _this = this
          navigator.geolocation.getCurrentPosition(function (position) {
            let x = (position.coords.latitude);
            _this.lat=x
            let y = (position.coords.longitude);
            _this.lan=y
          })
        } else {
          console.log('geolocation is not available');
        }
      },
      ...mapActions("attendance", ["setCheckedIn", "setCheckedOut"])
    },
    computed: {
      ...mapGetters("attendance", ["checkedAt", "checkedOutAt", "getdate"]),
      validlocation:function(params) {
         let differenceX=this.lat- this.desLocation.latitude
         let differenceY=this.lang-this.desLocation.longitude
         return differenceX<=0.00004 && differenceY<=0.00001?true :false
        
      }
    },
    created() {
      // let date=new Date(this.getdate)
      // let currentdate=new Date()
      // if (date===currentdate) {
      this.location()
      // }
      this.$store.dispatch("attendance/checkUsersCheckin");
    }
  };
</script>