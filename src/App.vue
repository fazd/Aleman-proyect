<template>
  <v-app>
    <NavDrawer/>
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
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer'
import NavDrawer from './components/NavDrawer/NavDrawer'
export default {
  name: 'App',

  components: {
    Navbar,Footer,NavDrawer
  },

  data: () => ({
    
  }),
};
</script>
