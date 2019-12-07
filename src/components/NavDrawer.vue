<template>
    <v-navigation-drawer
        v-model="$store.state.drawer"
        app
        :clipped="$vuetify.breakpoint.lgAndUp"   
    >
        <v-list dense>
        <v-list-item link>
            <v-list-item-action>
            <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item link>
            <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
            <v-list-item-title>Artikel</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item link>
            <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
            <v-list-item-title>Verben</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item link>
            <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
            <v-list-item-title>Wortschatz</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {

}
</script>

<style>

</style>