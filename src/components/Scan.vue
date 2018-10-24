<template>
<div id="full_div" >
    <l-map
        ref="map"
        :zoom="2"
        :min-zoom="minZoom"
        :max-zoom="maxZoom">
        
    <l-tile-layer
        :noWarp=true
        :url="url"
        :attribution="attribution"/>
    </l-map>
</div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';

export default {
    name: 'Example',
    components: {
        LMap,
        LTileLayer
    },
    props: {
        tilesize: {
            type: Number,
            default: 256
        },
        scanID: Number, // scanID should be used to look up width and height and the zooms
        width: Number,
        height: Number,
        maxZoom: Number,
        minZoom: Number,
    },
    computed: {
        zoom: function () {
            return Math.ceil(
                Math.log(
                Math.max(this.width, this.height) /
                this.tilesize
                ) / Math.log(2)
            )
        }
    },
    data () {
        return {
        url: process.env.VUE_APP_TILE_SERVER_URL + this.scanID +'/{z}/{x}/{y}.png',
        attribution: 'python-friends',
        };
    },
    mounted () {
        var map = this.$refs.map.mapObject
        if (this.width && this.height) {
            var margin = 0
            var southWest = map.unproject([0 - this.height * margin, this.height + this.height * margin], this.zoom)
            var northEast = map.unproject([this.width + this.width * margin, 0 - this.width * margin], this.zoom)
            map.setMaxBounds(new L.LatLngBounds(southWest, northEast))
        } else {
            console.log("There was an error loading the tile metadata.");
        }
        map.setView(map.unproject([this.width/2, this.height/2], this.zoom), 2)
    }
};
</script>

<style scoped>
@import "../../node_modules/leaflet/dist/leaflet.css";

#full_div {
    width: 100%; height:100%; position: fixed;
}

</style>
