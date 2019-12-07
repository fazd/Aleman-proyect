<template>
    <v-content>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink" cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    prepend-icon="mdi-account-circle"
                    v-model.trim="emailInpt"
                    :error="!enableEmail"
                  />
                  <v-text-field
                    :type=" showPassword ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword= !showPassword"
                    v-model.trim="passwordInpt"
                    :error="!enablePassword"
                  />
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn class="font-weight-bold" color="info" :to="'Register'">Register</v-btn>
                <v-spacer></v-spacer>
                <v-btn class="font-weight-bold" color="success" @click="isValid">
                  <h4 v-if="!loading">Login</h4>
                    <v-progress-circular
                      indeterminate
                      color="primary"
                      v-else
                    ></v-progress-circular>
                </v-btn>
              </v-card-actions>
                <v-alert v-model="error" transition="scroll-y-transition" dismissible type="error">
                  Complete los campos que están en rojo
                </v-alert>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
export default {
  name: "login",
  components: {},
  data: () => ({
    showPassword: false,
    emailInpt: "",
    passwordInpt: "",
    enablePassword: true,
    enableEmail: true,
    loading: false,
    error : false
  }),
  methods: {
    isValid() {
      var op =
        this.emailInpt.match(/\S+@\S+\.\S+/) != null &&
        this.passwordInpt.length > 7;
      if (op) {
        console.log("exito");
        var text ={
            "email":this.emailInpt,
            "password":this.passwordInpt
        }
            this.axios.post('http://localhost:3001/users/login',text).then(response => {
            //console.log("Se vienen los datos");
            console.log(response.data);
            this.loading= !this.loading;
            let url = "@/assets/perfil.jpg"
            this.$store.commit('login',response.data.name,url,response.data.token)
          })
          .catch(error => {
            //console.log("Llegó esto a cliente");
            console.log(error.response);
          })
          .finally(err=> {
            this.loading= false;
            console.log(err)
            this.$router.push({path: 'Home'})
          });
              
      } else {
        this.error = true;
        //alert("Complete los campos");
        this.enableEmail = this.emailInpt.match(/\S+@\S+\.\S+/) != null;
        this.enablePassword = this.passwordInpt.length > 7;
      }
      
    },
    changeError(){
      this.error = false;
    }
  },
  created() {
    if (this.$store.state.isLoged) {
      this.$router.push({ path: "home" });
    }
  }
};
</script>

<style>
</style>