<template>
    <div class="md:grid md:grid-cols-2 md:gap-6 mb-10">
        <div class="col-span-1"> 
            <div>
                <img src="../../../../assets/images/sign_up.png" alt="Sign In">
            </div>
        </div>
        <div class="col-span-1 items-center px-14">
            <div class="flex flex-col items-center">
                <h2 class="text-primary text-3xl font-bold mt-7 mb-4 uppercase">Welcome</h2>
            </div>
            <div class="px-7">
                <form action="" class="space-y-6">
                    <div>
                        <label for="email" class="block mb-2 font-bold text-sm capitalize">Email</label>
                        <input type="email" id="email" autocomplete="false" placeholder="example@email.com" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 font-bold text-sm capitalize">Password</label>
                        <input type="password" id="password" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base">
                    </div>
                    <div class="flex justify-start items-center space-x-2">
                        <input type="checkbox" id="agree" class="bg-primary required:border-red-500 checked:bg-primary">
                        <label for="agree" class="text-gray-700 text-sm">Remember Me</label>
                    </div>
                    
                    <button type="submit" class="block w-full bg-primary p-3 rounded text-white hover:bg-orange-700 transition duration-300">Sign Up</button>
                </form>
                <div class="pt-3 flex justify-start items-center">
                    <div class="capitalize text-sm font-bold pr-1">New here?</div>
                    <router-link class="font-bold text-primary capitalize" to="/signup">sign up</router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
</script>