<template>
  <v-navigation-drawer v-model="isDrawer" :mini-variant.sync="mini" app>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-on:click="onclickItem(item)">
            {{
            item.title
            }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
//import router from "../router/index"
import { mapGetters, mapMutations } from "vuex";
import authenticate from "../store/modules/authenticate";
export default {
  props: {
    drawer: Boolean,
    user: Object
  },
  data() {
    return {
      isDrawer: false,
      items: [
        { title: "Check-In", icon: "check_circle", route: "dashboard/checkin" },
        {
          title: "Users",
          icon: "mdi-account-group-outline",
          route: "dashboard/users"
        },
        { title: "Logout", icon: "exit_to_app", route: "/" }
      ],
      mini: true
    };
  },
  watch: {
    drawer(val) {
      this.isDrawer = val;
    },
    isDrawer(val) {
      this.$emit("drawer", val);
    }
  },
  computed: {
    ...mapGetters("authenticate", ["getauthenticated"])
  },

  methods: {
    ...mapMutations("authenticate", ["setAuthentication"]),
    onclickItem(item) {
      //router.push(route)

      item.title === "Logout" && this.setAuthentication(false);

      this.$router.push(item.route);
    }
  }
};
</script>
<style scoped>
.card {
  height: 100vh;
}
</style>
