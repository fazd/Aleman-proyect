<template>
  <v-app>
    <Navbar/>
    <v-content>
      <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <Footer/>
  
</v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer'
export default {
  name: 'App',

  components: {
    Navbar,Footer
  },

  data: () => ({
    //
  }),
};
</script>
