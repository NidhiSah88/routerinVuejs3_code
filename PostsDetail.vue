<template>
    <div class="post-detail">
        <h1> This is a posts page </h1>
        <p> Display the content of posts with ID of {{ $route.params.id}} here </p>
        <div>
            <button @click="showPostId"> Show Posts ID </button>
        </div>
        <div>
            <button @click="goHomeIn3sec">Go Home in 3 seconds </button>
        </div>
        <div>
            <button @click="goToPostsIn3sec">Go post in 3 seconds </button>
        </div>

        <p><RouterLink to="/posts">&lt; Back </RouterLink></p>
    </div>    
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostId = () =>{
    alert(`The ID of this post is: ${route.params.id}`)
}

const goHomeIn3sec = () =>{
    setTimeout(()=>{
        router.push('/home')
        //or
        // router.push({name: 'home'})
    },3000)
}

const goToPostsIn3sec = () =>{
    setTimeout(()=>{
        
        router.push({
            name: 'postsDetail',
            params:{
                id:'id1'
            } 
        })
    })
}
</script>