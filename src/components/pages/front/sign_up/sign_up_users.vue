<template>
<img class="logo" src="" />
<h1>Sign Up</h1>
<div class="register">
    <input type="text" placeholder="Enter name"/>
    <input type="email" placeholder="Enter email"/>
    <input type="password" placeholder="Enter password"/>
<button>Sign up</button>
</div>
<template>
    <script>
        export default {
            name :"SignUp"

</script>


        }
        <style>
            .logo
            {width:100%}
            .register input {
                width:300px;
                height:40px;
                padding-left:20px;
                margin-bottom:30px;
                margin-right:auto;
                margin-left:auto;
                border:1px solid skyblue;

            }
            .register button{
                width:320px;
                height:40px;
                border:1px solid skyblue;
                background:skyblue;
                color:#fff;
                cursor:pointer;
            }
        </style>
    
