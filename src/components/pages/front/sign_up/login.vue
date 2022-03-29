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
                <vee-form action="" class="space-y-6" :validation-schema="schema" @submit="login">
                    <div @click="authError=false">
                        <label for="email" class="block mb-2 font-bold text-sm capitalize">Email</label>
                        <vee-field type="email" name="email" id="email" autocomplete="false" placeholder="example@email.com" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                        <ErrorMessage class="text-red-600" name="email" />
                    </div>
                    <div @click="authError=false">
                        <label for="password" class="block mb-2 font-bold text-sm capitalize">Password</label>
                        <vee-field type="password" name="password" id="password" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                        <ErrorMessage class="text-red-600" name="password" />
                    </div>
                    
                    <div v-if="authError" class="flex justify-start items-center">
                        <font-awesome-icon icon="exclamation-circle" class="text-red-900 text-base ml-5 mr-3"></font-awesome-icon>
                        <p class="text-red-900 text-base font-bold">{{message}}</p>
                    </div>
                    
                    <button type="submit" @click="authError=false" :disabled="loading" class="block flex flex-col items-center w-full bg-primary p-3 rounded text-white hover:bg-orange-700 transition duration-300">
                        <div v-if="loading" class="mx-auto w-full">
                            <div class="bar bar1"></div>
                            <div class="bar bar2"></div>
                            <div class="bar bar3"></div>
                            <div class="bar bar4"></div>
                            <div class="bar bar5"></div>
                            <div class="bar bar6"></div>
                            <div class="bar bar7"></div>
                            <div class="bar bar8"></div>
                        </div>
                        <div v-if="!loading">
                        Log in
                        </div>
                    </button>
                </vee-form>
                <div class="pt-3 flex justify-start items-center">
                    <div class="capitalize text-sm font-bold pr-1">New here?</div>
                    <router-link class="font-bold text-primary capitalize" to="/signup">sign up</router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
// import user from "../../../store/Mutations/login.js";
import LOGIN from "../../../graphql/login.js";
import { useStorage } from "@vueuse/core";
import {set} from "../../../utils/user.js"
// import {userId} from "../../../utils/user.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default{
     data() {
        return {
            authError:false,
            loading:false,
            message:"log in error, please check your email or password",
            schema: {
                email:'required|min:4|max:20|email',
                password:'required',
            },
            }
  },
  components:{
        FontAwesomeIcon
    },
  apollo:{

  },
  methods: {
  login(user){
      this.loading=true;
      let data = this.$apollo.mutate({
        mutation: LOGIN,
        variables: { "email": user.email, "password": user.password },
    });
    if(data){
        data.then(user=>{
            if(user.data.login && user.data.login.token){
                let claims = user.data.login.token.split(".")[1];
            let d = JSON.parse(window.atob(claims));
            d["https://hasura.io/jwt/claims"].accessToken = user.data.login.token;
            localStorage.removeItem("session");
            localStorage.removeItem("token");
            const state = useStorage("session", d["https://hasura.io/jwt/claims"]);
            localStorage.setItem("token", user.data.login.token);
            set(state.value);
            // this.$router.go(-1);
            this.loading=false
            location.replace("/foods");
        }
        else{
            this.loading = false
            this.authError = true;
            this.message = user.data.login.message
        }
        })
    }

        // console.log(user);
        // if(data && data.data.login & data.data.login.token){
        //     let claims = data.data.login.token.split(".")[1];
        //     let d = JSON.parse(window.atob(claims));
        //     d["https://hasura.io/jwt/claims"].accessToken = data.data.login.token;
        //     localStorage.removeItem("session");
        //     localStorage.removeItem("token");
        //     const state = useStorage("session", d["https://hasura.io/jwt/claims"]);
        //     localStorage.setItem("token", data.data.login.token);
        //     set(state.value);
        //     console.log("state value " + state.value)
        //     console.log("state value id " + state.value.id);

        //     // this.$store.dispatch('login',state.value.id)
        //     // location.replace("/");
            
        // }
        // else{
        //     // by using toast notification USER NOT FOUND message will be displayed here
        // }
  },
}
}
</script>
<style scoped>

.bar {
  width: 10px;
  height: 20px;
  display: inline-block;
  transform-origin: bottom center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  /*   box-shadow:5px 10px 20px inset rgba(255,23,25.2); */
  animation: loader 1.2s linear infinite;
}
.bar1 {
  animation-delay: 0.1s;
}
.bar2 {
  animation-delay: 0.2s;
}
.bar3 {
  animation-delay: 0.3s;
}
.bar4 {
  animation-delay: 0.4s;
}
.bar5 {
  animation-delay: 0.5s;
}
.bar6 {
  animation-delay: 0.6s;
}
.bar7 {
  animation-delay: 0.7s;
}
.bar8 {
  animation-delay: 0.8s;
}

@keyframes loader {
  0% {
    transform: scaleY(0.1);
    background: yellowgreen;
  }
  50% {
    transform: scaleY(1);
    background: yellowgreen;
  }
  100% {
    transform: scaleY(0.1);
    background: transparent;
  }
}
</style>