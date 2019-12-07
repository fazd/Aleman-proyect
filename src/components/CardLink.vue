<template>
    <v-hover>
    <template v-slot:default="{ hover }">
        <v-card>
        <v-img class="align-end" height="250px" width="250px" :src="src" >
            <v-card-title>{{title}}</v-card-title>
        </v-img>    
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn>See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>

</template>

<script>
export default {
    props:{
        title: String,
        src: String
    },
    
}
</script>

<style>

</style>