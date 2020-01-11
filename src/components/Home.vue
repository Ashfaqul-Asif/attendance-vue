<template>
  <v-container fill-height>
    <v-card class="mx-auto my-auto  card">
      <v-card-text>
        <h2 class="login">Login</h2>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            type="password"
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>
          <v-hover>
            <v-btn
              color="success"
              class=" button mr-4 float-right"
              v-on:click="login()"
            >
              Login
            </v-btn>
          </v-hover>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { CLIENT_RENEG_LIMIT } from "tls";
export default {
  data: () => ({
    valid: true,

    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required"
      /* v => (v && v.length > 5) || "Password must be greater than 5 characters" */
    ],
    select: null,
    checkbox: false
  }),
  computed: {
    ...mapGetters(["allusers"])
  },
  methods: {
    ...mapMutations(["setState", " setAuthentication"]),

    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    login() {
      if (this.$refs.form.validate()) {
        let u = this.allusers.find(
          a => a.email === this.email && a.password === this.password
        );
        if (u) {
          this.$store.commit("authenticate/setAuthentication", true);
          this.$router.push({ name: "about" });
          console.log("login Successfull");
        } else {
          console.log("The username and / or password is incorrect");
        }
      }
    }
  }
};
</script>

<style scoped>
.login {
  text-align: center;
}
.card {
  min-height: 50vh;
  min-width: 90vh;
}
</style>
