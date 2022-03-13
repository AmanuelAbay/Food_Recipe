<template>
    <div class="md:grid md:grid-cols-2 md:gap-6 mb-10">
        <div class="col-span-1"> 
            <img src="../../../../assets/images/sign_up.png" alt="Sign Up">
        </div>
        <div class="col-span-1 items-center px-14">
            <div class="flex flex-col items-center">
                <h2 class="text-primary text-3xl font-bold mt-7 mb-4">Sign Up</h2>
            </div>
            <div class="px-7">

                <vee-form action="" class="space-y-6" :validation-schema="schema" @submit="register">

                    <div class="grid grid-cols-2 items-center">
                        <div class="pr-7">
                            <label for="firstname" class="block mb-2 font-bold text-sm capitalize">First Name</label>
                            <vee-field type="text" name="firstname" id="firstname" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                            <ErrorMessage class="text-red-600" name="firstname" />
                        </div>
                        <div>
                            <label for="lastname" class="block mb-2 font-bold text-sm capitalize">Last Name</label>
                            <vee-field type="text" name="lastname" id="lastname" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                            <ErrorMessage class="text-red-600" name="lastname" />
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 font-bold text-sm capitalize">Email</label>
                        <vee-field type="email" name="email" id="email" autocomplete="false" placeholder="example@email.com" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                        <ErrorMessage class="text-red-600" name="email" />
                    </div>
                    <div>
                        <label for="phonenumber" class="block mb-2 font-bold text-sm capitalize">Phone Number</label>
                        <vee-field type="text" name="phonenumber" id="phonenumber" placeholder="+251" autocomplete="false" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                        <ErrorMessage class="text-red-600" name="phonenumber" />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 font-bold text-sm capitalize">Password</label>
                        <vee-field type="password" name="password" id="password" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                        <ErrorMessage class="text-red-600" name="password" />
                    </div>
                    <div>
                        <label for="confirmpassword" class="block mb-2 font-bold text-sm capitalize">Confirm Password</label>
                        <vee-field type="password" name="confirmpassword" id="confirmpassword" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                        <ErrorMessage class="text-red-600" name="confirmpassword" />
                    </div>
                    <div class="flex justify-start items-center space-x-2">
                        <input type="checkbox" v-model="checked" id="agree" class="bg-primary required:border-red-500 checked:bg-primary">
                        <label for="agree" class="text-gray-700 text-sm">I agree to the terms and privacy</label>
                    </div>
                    <button type="submit" :disabled="!this.checked" class="block w-full bg-primary p-3 rounded text-white hover:bg-orange-700 transition duration-300">Sign Up</button>
                </vee-form>
                <div class="pt-3 flex justify-start items-center">
                    <div class="capitalize text-sm font-bold pr-1">Already Have Account?</div>
                    <router-link class="font-bold text-primary" to="/signin">sign In</router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default{
     data() {
        return {
        schema: {
            firstname: 'required|alpha_spaces',
            lastname:   'required',
            email:'required|min:4|max:20|email',
            phonenumber:'required',
            password:'required',
            confirmpassword:'password_mismatch:@password'
        },
        checked:false
        }
  },
  methods: {
  register(values){
    this.$store.dispatch('signup',values)
  },
}
}
</script>