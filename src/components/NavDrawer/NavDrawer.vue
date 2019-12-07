<template>
    <v-navigation-drawer
        v-model="$store.state.drawer"
        app
        :clipped="$vuetify.breakpoint.lgAndUp"
        temporary   
    >
        <v-list dense rounded>
        <component  v-bind:is="logStatus"></component>
        <v-divider class="mb-4"></v-divider>
        <v-list-item link v-for="(item,i) in items" :key="i"  :to="item.link">
            <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import LogedIn from './LogedIn'
import LogedOut from './LogedOut'
export default {
    components:{
        LogedIn,LogedOut
    },
    data : ()=>({
        profileName : 'Fabio',
        profileIcon : require('@/assets/perfil.jpg'),
        items : [
            {
                title: 'Home',
                icon: 'mdi-home',
                link: 'Home'
            },
            {
                title: 'Artikel',
                icon:'mdi-pencil',
                link: 'Artikel'
            },
            {
                title: 'Konjugation',
                icon: 'mdi-pencil',
                link: 'Konjugation'
            },
            {
                title: 'Verben',
                icon: 'mdi-pencil',
                link: 'Verben'
            },
            {
                title: 'Wortschatz',
                icon: 'mdi-pencil',
                link: 'Wortschatz'
            },
        ]
    }),
    computed:{
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