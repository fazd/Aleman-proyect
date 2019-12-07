<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
       <v-toolbar color="primary" dark flat>
                <v-toolbar-title>{{title}}</v-toolbar-title>
              </v-toolbar>

        <v-card-text >
          <h3 class="mt-5">{{text}}</h3>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="finish"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    props:{
        title: String,
        text: String
    },
    data (){
        return {
            dialog: true
        }
    },
    methods:{
        finish(){
            this.dialog=false
            this.$emit('close-dialog');
        }
    }
    
}
</script>

<style>

</style>