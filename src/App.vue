<template>
  <v-app>
    <Navbar/>
    
  
  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
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
