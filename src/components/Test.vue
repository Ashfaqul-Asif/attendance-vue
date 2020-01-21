<template>
  <v-btn @click="location()">
    <p>CheckIn</p>
  </v-btn>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      
    }
  },
  methods: {
    location:function(){
        if ('geolocation' in navigator) {
           console.log('geolocation is available');
           navigator.geolocation.getCurrentPosition(function(position){
           let x=(position.coords.latitude);
           console.log(x);
           let y=(position.coords.longitude);
           console.log(y);
           })
        }else{
          console.log('geolocation is not available');
        }
      }
    
  },
 
};
</script>

<style>
</style>