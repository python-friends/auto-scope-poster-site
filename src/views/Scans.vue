<template>
<div>
  <v-container v-if="loading">
    <v-progress-circular
    :size="70"
    :width="7"
    color="purple"
    indeterminate
  ></v-progress-circular>
  </v-container>
  <v-responsive v-else-if="error" color="primary" dark>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Scan with ID {{scanID}} not found.</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-responsive>
  <div v-else>
    <Scan 
      :width="width"
      :height="height"
      :scanID="scanID"
      :maxZoom="maxZoom"
      :minZoom="minZoom"
    />
  </div>
</div>
</template>
<script>
  import Scan from '../components/Scan'
  import axios from 'axios';

  export default {
    components: {
      Scan
    },
    data () {
      return {
        width: null,
        height: null,
        minZoom: null,
        maxZoom: null,
        scanID: Number(this.$route.params.id),
        loading: true,
        error: false
      }
    },
    mounted() {
      var convert = require('xml-js');
      axios({
          method:'get',
          url: process.env.VUE_APP_TILE_SERVER_URL + this.scanID + '/tilemapresource.xml',
          responseType:'text'
        })
        .then(response => {
          var data = convert.xml2js(response.data, {compact: true, alwaysChildren: true}).TileMap
          var BoundingBox = data.BoundingBox._attributes
          var TileSet = data.TileSets.TileSet
          this.minZoom = Number(TileSet[0]._attributes.order)
          this.maxZoom = Number(TileSet[TileSet.length - 1]._attributes.order)
          this.width = Math.max(Math.abs(Number(BoundingBox.maxx)), BoundingBox.minx)
          this.height = Math.max(Math.abs(Number(BoundingBox.miny)), BoundingBox.maxy)
          this.loading = false
        })
        .catch(error => {
          console.log(error);
          this.loading = false
          this.error = true
          //this.$router.push('/404')
      });   
    }
  }
</script>
