<template>
    <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
      fixed
      app
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Deutschkurz</v-toolbar-title>

      <v-spacer></v-spacer>
      <component  v-bind:is="logStatus"></component>
<!--       
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
    
</template>

<script>
import LogedIn from './LogedIn.vue'
import LogedOut from './LogedOut.vue'
export default {
    components: {
      LogedIn, LogedOut
    },
    data: ()=>({
        backgroundNav: 'require("../assets/background-bar.jpg")'
    }),
    computed: {
      logStatus: function(){
        if(this.$store.state.log){
          return 'LogedIn'
        }
        else{
          return 'LogedOut'
        }
      }
    }
}
</script>

<style>

</style>