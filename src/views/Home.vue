<template>
  <v-content>
    <v-container fluid class="fill-height">
      <v-row>
        <v-col>
            <!-- <h1>Galeria</h1> -->
            <v-carousel
              cycle
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
              >
                <v-sheet
                  :color="colors[i]"
                  height="100%"
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <div class="display-3">{{ slide }} Slide</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
  methods: {
    
  }
}
</script>
