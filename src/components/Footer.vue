<template>
    <v-footer
    dark
    padless
    absolute
    app

  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon,i) in icons"
          :key="i"
          class="mx-4"
          dark
          icon
        >  <a :href="icon.link" target="_blank"><v-icon color="white" size="24px">{{ icon.icon }}</v-icon></a>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Made by Semillero 2019</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
      icons: [
        {icon: 'mdi-instagram', link:'https://www.instagram.com/urrrlaub/'},
        {icon: 'mdi-twitter', link:''},
        {icon: 'mdi-google-plus', link: ''},
        {icon: 'mdi-github-circle', link: 'https://github.com/fazd/Aleman-proyect'}
      ],
    }),
}
</script>

<style>

</style>