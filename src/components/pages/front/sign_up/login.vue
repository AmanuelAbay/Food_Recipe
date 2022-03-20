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
                    <div>
                        <label for="email" class="block mb-2 font-bold text-sm capitalize">Email</label>
                        <vee-field type="email" name="email" id="email" autocomplete="false" placeholder="example@email.com" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                        <ErrorMessage class="text-red-600" name="email" />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 font-bold text-sm capitalize">Password</label>
                        <vee-field type="password" name="password" id="password" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                        <ErrorMessage class="text-red-600" name="password" />
                    </div>
                    
                    <button type="submit" class="block w-full bg-primary p-3 rounded text-white hover:bg-orange-700 transition duration-300">Log in</button>
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
export default{
     data() {
        return {
        schema: {
            email:'required|min:4|max:20|email',
            password:'required',
        },
        }
  },
  apollo:{

  },
  methods: {
  login(user){
      let data = this.$apollo.mutate({
        mutation: LOGIN,
        variables: { "email": user.email, "password": user.password },
    });
    if(data){
        data.then(user=>{
            console.log(user.data.login);
            if(user.data.login){
                console.log("fukck")
                let claims = user.data.login.token.split(".")[1];
            let d = JSON.parse(window.atob(claims));
            d["https://hasura.io/jwt/claims"].accessToken = user.data.login.token;
            console.log(d)
            localStorage.removeItem("session");
            localStorage.removeItem("token");
            const state = useStorage("session", d["https://hasura.io/jwt/claims"]);
            localStorage.setItem("token", user.data.login.token);
            console.log(state.value)
            set(state.value);
            // console.log("state" + state.value["x-hasura-user-id"])
            // console.log(userId.value);

            // this.$store.dispatch('login',state.value.id)
            location.replace("/");
            
        }
        // else{
        //     console.log("user not found")
        // }
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