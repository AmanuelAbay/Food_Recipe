<template>
    <section>
        <ul class="md:flex md:justify-between mt-14">
            <li class="my-8">
                <div class="text-center flex flex-col justify-center items-center px-6">
                    <!-- icon container div -->
                    <div class="bg-primary p-5 rotate-45 w-max background-rotate">
                        <font-awesome-icon icon="hotel" class="text-white text-5xl image-rotate"></font-awesome-icon>            
                    </div>
                    <h1 class="text-xl font-bold mt-8 mb-2 uppercase">Hotel Booking</h1>
                    <p class="text-truncate text-start break-normal"> tempora minus adipisci aperiam iure eius velit doloremque cum unde magnam sint pariatur distinctio veniam? Velit, eligendi?</p>
                </div>
            </li>
            <li class="my-8">
                <div class="text-center flex flex-col justify-center items-center px-6">
                    <!-- icon container div -->
                    <div class="bg-primary p-5 rotate-45 w-max background-rotate">
                        <font-awesome-icon icon="bed" class="text-white text-5xl image-rotate"></font-awesome-icon>            
                    </div>
                    <h1 class="text-xl font-bold mt-8 mb-2 uppercase">Room</h1>
                    <p class="text-truncate text-start break-normal"> tempora minus adipisci aperiam iure eius velit doloremque cum unde magnam sint pariatur distinctio veniam? Velit, eligendi?</p>
                </div>
            </li>
            <li class="my-8">
                <div class="text-center flex flex-col justify-center items-center px-6">
                    <!-- icon container div -->
                    <div class="bg-primary p-5 rotate-45 w-max background-rotate">
                        <font-awesome-icon icon="wifi" class="text-white text-5xl image-rotate"></font-awesome-icon>            
                    </div>
                    <h1 class="text-xl font-bold mt-8 mb-2 uppercase">wifi</h1>
                    <p class="text-truncate text-start break-normal"> tempora minus adipisci aperiam iure eius velit doloremque cum unde magnam sint pariatur distinctio veniam? Velit, eligendi?</p>
                </div>
            </li>
            <li class="my-8">
                <div class="text-center flex flex-col justify-center items-center px-6">
                    <!-- icon container div -->
                    <div class="bg-primary p-5 rotate-45 w-max background-rotate">
                        <font-awesome-icon icon="concierge-bell" class="text-white text-5xl image-rotate"></font-awesome-icon>            
                    </div>
                    <h1 class="text-xl font-bold mt-8 mb-2 uppercase">Delivery</h1>
                    <p class="text-truncate text-start break-normal"> tempora minus adipisci aperiam iure eius velit doloremque cum unde magnam sint pariatur distinctio veniam? Velit, eligendi?</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
    components:{
FontAwesomeIcon
    }
}
</script>

<style scoped>
.background-rotate{
    transform: rotate(45deg);
}
.image-rotate{
    transform: rotate(-45deg);
}
</style>