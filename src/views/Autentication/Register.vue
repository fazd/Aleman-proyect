<template>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card>
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register form</v-toolbar-title>
              </v-toolbar>    
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model.trim="nameInpt"
                    prepend-icon="mdi-account-circle"
                    label="Nombre"
                    v-on:input="validName"
                    :error="!enableName"
                  />
                  <v-text-field
                    v-model.trim="lastNameInpt"
                    prepend-icon="mdi-account-circle"
                    label="Apellido"
                    v-on:input="validLastName"
                    :error="!enableLastName"
                  />
                  <v-text-field
                    v-model.trim="cellphoneInpt"
                    prepend-icon="mdi-cellphone"
                    label="Celular"
                    v-on:input="validPhone"
                    :error="!enablePhone"
                  />
                  <v-text-field
                    v-model.trim="emailInpt"
                    prepend-icon="mdi-email"
                    label="Correo"
                    v-on:input="validEmail"
                    :error="!enableEmail"
                  />
                  <v-text-field
                    v-model.trim="passwordInpt"
                    :type=" showPassword ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword= !showPassword"
                    v-on:input="validPassword"
                    :error="!enablePassword"
                  />
                  <v-text-field
                    v-model.trim="password2Inpt"
                    :type=" showPasswordConf ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPasswordConf ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPasswordConf= !showPasswordConf"
                    v-on:input="validPassword2"
                    :error="!enablePassword2"
                  />
                  <v-select
                    :items="options"
                    label="¿Pertenece al semillero de aleman?"
                    v-model="semiInpt"
                    :error="!enableSelect"
                  ></v-select>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn class="font-weight-bold" color="info" :to="'Home'">Atrás</v-btn>
                <v-spacer></v-spacer>
                <v-btn class="font-weight-bold" color="success" @click="validAll">
                  <h4 v-if="!loading">Registrarse</h4>
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
        <Dialog v-if="activateDialog" v-on:close-dialog="changeWindow" title="Registro exitoso" text="Su registro ha sido exitoso"></Dialog>  
      </v-container>
    </v-content>
</template>

<script>

import Dialog from '@/components/Dialog.vue'
export default {
  name: "register",
  components: {
    Dialog
  },
  data: () => ({
    showPassword: false,
    showPasswordConf: false,
    enablePhone: true,
    enableName: true,
    enableLastName: true,
    enableEmail: true,
    enablePassword: true,
    enablePassword2: true,
    enableSelect: true,
    nameInpt: "",
    lastNameInpt: "",
    cellphoneInpt: "",
    emailInpt: "",
    passwordInpt: "",
    password2Inpt: "",
    select: "",
    semiInpt:'',
    links: ["Home", "Login", "Register"],
    options: ["Si", "No"],
    loading: false,
    error: false,
    activateDialog:false
  }),
  methods: {
    hasSpecial(str) {
      return str.match(/^[a-zA-Z ]+$/) != null;
    },
    validPhone() {
      this.enablePhone =
        this.cellphoneInpt.length > 0 &&
        this.cellphoneInpt.match(/^\d+$/) != null;
    },
    validName() {
      this.enableName =
        this.hasSpecial(this.nameInpt) && this.nameInpt.trim().length > 0;
    },
    validLastName() {
      this.enableLastName = this.hasSpecial(this.lastNameInpt); //&& this.lastNameInpt.trim().length > 0)
    },
    validEmail() {
      this.enableEmail = this.emailInpt.match(/\S+@\S+\.\S+/) != null;
    },
    validPassword() {
      this.enablePassword = this.passwordInpt.length > 7;
    },
    validPassword2() {
      this.enablePassword2 = this.passwordInpt == this.password2Inpt;
    },
    validSelect() {
      this.enableSelect = !(this.select == "Si" || this.select=="No");
    },
    validAll() {
      this.validName();
      this.validLastName();
      this.validPhone();
      this.validEmail();
      this.validPassword();
      this.validPassword2();
      this.validSelect();
      if (
        this.enableName &&
        this.enableLastName &&
        this.enablePhone &&
        this.enableEmail &&
        this.enablePassword &&
        this.enablePassword2 &&
        this.enableSelect
      ) {
        var text = {
          name: this.nameInpt,
          lastname: this.lastNameInpt,       
          email: this.emailInpt,
          password: this.passwordInpt,
          cellphone: this.cellphoneInpt,
          belongSemm: this.semiInpt
        };
        this.axios.post('http://localhost:3001/users', text).then(response => {
            //console.log("Se vienen los datos");
            console.log(response.data);
            //console.log("exito")
            this.$router.push({path: 'home'})
          })
          .catch(error => {
            //console.log("Llegó esto a cliente");
            console.log(error.response);
          });
          this.activateDialog=true;
          
      } else {
        this.error = true;
        //alert("Complete los campos");
      }
    },
    changeWindow(){
      this.$router.push({path: 'Home'})
    }
  }
};
</script>