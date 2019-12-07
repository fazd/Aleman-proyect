<template>
  <v-content>
    <v-container fluid class="fill-height">
      <v-row class="mb-5">
        <v-col>
          <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <h2>Links para practicar</h2>
      <v-row class="mb-5">
        <v-col col="12" sm="8" md="3">
          <CardLink title="Hören" src="http://german-akademie.com/wp-content/uploads/2017/05/deutsch-lernen-durch-horen-hor-mal-12-meine-handtasche-ist-weg.jpg"></CardLink>
        </v-col>
        <v-col col="12" sm="8" md="3">
          <CardLink title="Hören" src="http://german-akademie.com/wp-content/uploads/2017/05/deutsch-lernen-durch-horen-hor-mal-12-meine-handtasche-ist-weg.jpg"></CardLink>

        </v-col>
        <v-col col="12" sm="8" md="3">
          <CardLink title="Hören" src="http://german-akademie.com/wp-content/uploads/2017/05/deutsch-lernen-durch-horen-hor-mal-12-meine-handtasche-ist-weg.jpg"></CardLink>
        </v-col>
        <v-col col="12" sm="8" md="3">
          <CardLink title="Hören" src="http://german-akademie.com/wp-content/uploads/2017/05/deutsch-lernen-durch-horen-hor-mal-12-meine-handtasche-ist-weg.jpg"></CardLink>
        </v-col>
        
      </v-row>
      <h2>Sobre nosotros</h2>
      <v-row  align="center" justify="center" v-for="(user,i) in users.length/2" :key="i" >
        <v-col cols="12" sm="8" md="5">
          <v-card color="dark" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline">{{users[2*i].name}}</v-card-title>
                <v-card-subtitle>{{users[2*i].text}}</v-card-subtitle>
              </div>

              <v-avatar class="ma-5" size="125" fab>
                <v-img :src="users[2*i].src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8" md="5">
          <v-card color="dark" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline">{{users[2*i+1].name}}</v-card-title>
                <v-card-subtitle>{{users[2*i+1].text}}</v-card-subtitle>
              </div>

              <v-avatar class="ma-5" size="125" fab>
                <v-img :src="users[2*i+1].src"></v-img>
              </v-avatar>
            </div>
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import CardLink from '../components/CardLink.vue'
export default {
  name: "home",
  components: {CardLink},
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      users: [
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
        {
          name: "Fabio Andres",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt dolor odit dolorem consequuntur nemo tenetur quam ipsam ducimus, libero tempore sit enim accusamus, numquam sint fugit corporis quos voluptatibus.",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        },
      ]
    };
  },
  methods: {}
};
</script>
