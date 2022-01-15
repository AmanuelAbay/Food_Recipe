<template>
    <div>current Location</div>
    <div>latitude: {{currPos.lat.toFixed(2)}}, longitude: {{currPos.lat.toFixed(2)}}</div>
    <div ref="mapDiv" style="width:100%; height:80hv"></div>
</template>

<script>
import {computed, onMounted, ref} from 'vue'
import { useGeolocation } from './useGeolocation'
import {Loader} from '@googlemaps/js-api-loader'

const GOOGLE_MAPS_API_KEY = 'AIzaSyAHNqFhjcQ4M_kaCGrF6va356FJWzdkzkE'
export default{
    name:'Restaurant Location',
    setup(){
        const { coords } = useGeolocation()
        const currPos= computed(()=>({
            lat: coords.value.latitude,
            lng: coords.value.longitude
        }))
        const loader=new Loader({apiKey: GOOGLE_MAPS_API_KEY})
        const mapDiv = ref(null)
        onMounted(async()=>{
            await loader.load()
            // eslint-disable-next-line no-undef
            new google.maps.Map(mapDiv.value, {
                center: currPos.value,
                zoom:7
            })
        })
        return {currPos, mapDiv}
    }
    
}
</script>