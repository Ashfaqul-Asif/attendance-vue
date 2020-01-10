<template>
  <div >
    {{highestid}}
    <v-data-table
      :headers="headers"
      :items="tabledata"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          edit
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          delete
        </v-icon>
      </template>
    </v-data-table>

    <v-row class="button">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Add people</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="userform"
                ><v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="name"
                      label=" Name*"
                      required
                      :rules="nameRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      label="Email*"
                      required
                      :rules="emailRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="password"
                      label="Password"
                      type="password"
                      required
                      :rules="passwordRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6"> </v-col>
                </v-row>
              </v-form>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click=" dialog = false"
              >Close</v-btn
            >
            <v-btn color="blue darken-1" text @click="onSaveitem(item)"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    
    <v-dialog v-model="dialogdelete" persistent max-width="400px">
      <v-card>
        <v-card-title>
       <H5>Are you sure you want to delete this item?</H5>

        </v-card-title>
        <v-card-actions>
      <v-row
      class="mx-0"
      justify="space-around"
      >
      <v-btn small color="light-green " @click="deleteConfirmed">Confirm</v-btn>
      <v-btn small color="blue darken-1" @click="dialogdelete= false">Cancel</v-btn>
      </v-row>
      </v-card-actions>
      </v-card>
      
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      dialogdelete:false,
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "E-mail", value: "email" },
        { text: "ID", value: "id" },
        { text: "Actions", value: "action", sortable: false }
      ],
      name: "",
      nameRules: [
        v => !!v || "Password is required",
        v => (v && v.length > 4) || "Name must be greater than 4 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length > 5) || "Password must be greater than 5 characters"
      ],
      editedIndex: -1,
      editedItem: null,
      onDeleteItem:{}
    };
  },
  created(){
    !this.signinedIn && this.$router.push("/")
  },
  computed: {
    ...mapGetters(['signinedIn']),
    ...mapGetters("users", ["tabledata","highestid"])
  },
  methods: {
    onSaveitem(item) {
      let obj = {
        name: this.name,
        email: this.email,
        id: this.highestid+1,
      };
      this.addPeople(obj);
      this.dialog = false;
      this.name = "";
      this.email = "";
      this.password = "";
      this.$refs.userform.reset();
    },
    editItem(item) {
      this.editedIndex = this.tabledata.indexOf(item);
      console.log(this.editedIndex)
      this.editedItem = Object.assign({}, item);
      console.log(this.editedItem)
      this.name = this.editedItem.name
      this.email = this.editedItem.email
      this.password = this.editedItem.password
      this.dialog = true;
    },
    deleteItem(item) {
      this.onDeleteItem=item;
       this.dialogdelete = true;

    },
    deleteConfirmed(){
      this.dialogdelete=false;
      this.deletepeople(this.onDeleteItem)
    },
    
   /*  close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      }, */

    ...mapMutations("users", ["addPeople","deletepeople"])
  }
};
</script>
<style>
.button {
  margin: 10px;
  float: right;
}
</style>
