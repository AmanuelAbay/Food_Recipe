<template>
    <div class="card hover:shadow-lg">
        <img src="../../../../assets/images/restaurants/coffe.jpg" :alt="Name" class="w-full h-32 sm:h-48 object-cover">
        <div class="m-4">
            <div class="md:flex justify-between items-center">
                <span class="font-bold capitalize">{{Name}}</span>
                <svg class="w-5 h-5" fill="#FF7F3F" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path></svg>
            </div>
            <div class="flex justify-start items-center">
                <span class="text-gray-500 text-sm mr-1 capitalize">{{Category}}</span>|
                <span class="text-gray-500 text-sm ml-1 capitalize">{{Address}}</span>
            </div>
            <div class="md:flex md:justify-start items-center mt-2">
                <svg class="w-4 h-4" fill="#FF7F3F" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <div>({{Rate}})</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['imageName','Name','Category','Address','Rate'],
    methods:{
        getImgUrl(imageName) {
            var images = require.context('../../../../assets/images/restaurants/', false, /\.jpg$/)         
            return images('./' + imageName + '.jpg')
        }
    }
}
</script>