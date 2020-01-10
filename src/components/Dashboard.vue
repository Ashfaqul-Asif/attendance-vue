<template >
  
  <v-card v-if="signinedIn" class="card">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-on:click="onclickItem(item.route)">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
//import router from "../router/index"
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city',  },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline',route:'/users' },
        ],
        mini: true,
        }
    },
    computed: {
    ...mapGetters(['signinedIn']),
  
  },
  created(){
    !this.signinedIn && this.$router.push("/")
  },


    methods:{
      onclickItem( route){
        //router.push(route)
        this.$router.push(route)
      }
    }
    
}
</script>
<style  scoped>
.card{
    height: 100vh;
}

</style>