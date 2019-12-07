<template>
  <div>
    <v-row>
      <v-col class="mr-5">
       <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <h3 class="mr-5 mt-2">Bienvenido Fabio</h3>
        </div>
        <v-avatar   fab>
          <v-img :src="link"></v-img>
        </v-avatar>
       </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data :() =>({
    link: require('@/assets/perfil.jpg')
  })
}
</script>

<style>

</style>