<template>
  <v-content>
      <section>
        <v-parallax v-bind:src="require('@/assets/images/test-2_test.jpg')" >
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <div class="title">
            <h1 class="white--text mb-2 display-1 text-xs-center">Auto-scope: a cheap optical microscope modification for whole slide imaging</h1>
            <div class="subheading mb-3 text-xs-center">Wytamma Wirth and Eike Steinig</div>
            </div>
          </v-layout>
         
        </v-parallax>
      </section>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Below you'll find the supplementary material for our project</h2>
              <span class="subheading">
                Please share and credit our work.
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">settings_overscan</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Slide Scans</div>
                    </v-card-title>
                    <v-card-text>
                      Auto-scope can generate images that are gigapixels in size. The links below provide easy interaction with these large files using mapping technology.
                    </v-card-text>
                    <v-btn dark class="green" :to="{ name: 'scans', params: { id: 2 }}">400x (200 tiles)</v-btn>
                    <v-btn dark class="blue">100x (full slide)</v-btn>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">lock_open</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Source code</div>
                    </v-card-title>
                    <v-card-text>
                      Auto-scope is completely open source, the code used in this project is found on Github (link below). The project is under active development.
                    </v-card-text>
                     <v-btn dark href="https://github.com/python-friends/auto-scope">Code</v-btn>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">3d_rotation</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">3D printer models</div>
                    </v-card-title>
                    <v-card-text>
                      The 3D models used in this project are freely avaiable on the 3D model sharing platform, Thingiverse. 
                    </v-card-text>
                    <v-btn dark color="blue-grey">Models</v-btn>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <section>
        <v-parallax v-bind:src="require('@/assets/images/auto-scope-2.png')" height="200">
        </v-parallax>
      </section>
      
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Python-friends</div>
                </v-card-title>
                <v-card-text>
                  Python-friends was started as a weekly meetup for Python users at James Cook University. 
                  The Auto-scope project is a product of these weekly meetings. 
                  Anyone is welcome to join Python-friends, regardless of previous programming experience.
                  Follow our <a href="https://python-friends.com">blog</a>.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Eike and Wytamma are more than happy to talk about this project.
                </v-card-text>
                <v-list class="transparent">
                  
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>wytamma.wirth @ my.jcu.edu.au</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>eike.steinig @ my.jcu.edu.au</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-card>
        <v-toolbar dark color="blue darken-2">
          <v-toolbar-title>References</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile
            v-for="(item, index) in references"
            :key="item.reference"
            avatar
            :href="item.link"
            target=”_blank” 
          >
            <v-list-tile-action>
             <h1>{{index + 1}}</h1>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.reference"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
      </section>
      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              &
              Python
              by <a class="white--text" href="https://wytamma.com" target="_blank">Wytamma Wirth</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
  return {
    references: [
      {'link':'https://www.annualreviews.org/doi/abs/10.1146/annurev-pathol-011811-120902', 'reference':'Ghaznavi, F., Evans, A., Madabhushi, A., & Feldman, M. (2013). Digital imaging in pathology: whole-slide imaging and beyond. Annual Review of Pathology: Mechanisms of Disease, 8, 331-359.'},
      {'link':'https://www.osapublishing.org/boe/abstract.cfm?uri=boe-6-9-3210', 'reference':'Guo, K., Liao, J., Bian, Z., Heng, X., & Zheng, G. (2015). InstantScope: a low-cost whole slide imaging system with instant focal plane detection. Biomedical optics express, 6(9), 3210-3216.'},
      {'link':'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0194063', 'reference':'Lu, Q., Liu, G., Xiao, C., Hu, C., Zhang, S., Xu, R. X., ... & Smith, Z. J. (2018). A modular, open-source, slide-scanning microscope for diagnostic applications in resource-constrained settings. PloS one, 13(3), e0194063.'},
      {'link':'http://opensource-robotics.tokyo.jp/ros.org/wiki.ros.org/attachments/Events(2f)ICRA2010Tutorial/ICRA_2010_OpenCV_Tutorial.pdf', 'reference':'Bradski, G., & Kaehler, A. (2000). OpenCV. Dr. Dobb’s journal of software tools, 3.'},
      {'link':'http://www.dtic.mil/docs/citations/ADA215959','reference':'Nayar, S. K. (1989). Shape from focus (No. CMU-RI-TR-89-27). Carnegie-mellon Univ Pittsburgh Pa Robotics Inst.'},
      {'link':'https://academic.oup.com/bioinformatics/article/25/11/1463/332497','reference':'Preibisch, S., Saalfeld, S., Tomancak, P. (2009). Globally optimal stitching of tiled 3D microscopic image acquisitions, Bioinformatics, 25(11):1463-1465.'},
      {'link':'https://www.panoramastitcher.com/','reference':'Boltnev, A., & Kacher, O. (2018). Panorama Stitcher [Computer software]. Boltnevstudio.'},
    ]
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title {
  background-color: rgba(52, 73, 94,0.7);
  padding: 10px
}
</style>
