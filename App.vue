<template>
    <div>
        <ul>
            <li>
                <router-link to="/count">counter</router-link>
            </li>
            <li>
                <router-link to="/count/con">con</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script type="es6">
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
    }
</script>
