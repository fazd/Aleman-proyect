<template>
  <v-list-item  link to="profile">
        <v-list-item-content>
        <v-list-item-title>Hallo {{profileName}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
        <v-avatar size="50" fab>
            <v-img :src="profileIcon"></v-img>
            </v-avatar>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
export default {
    data(){
        return {
            profileName: 'Fabio',
            profileIcon: require('@/assets/perfil.jpg')
        }
    }
}
</script>

<style>

</style>