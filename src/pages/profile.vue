<template>
<div  vocab="http://schema.org/" typeof="Person"> 
<user-profile photo="http://gustavoamerico.net/Midia/images/profile-avatar.jpg" user-name="Gustavo Américo" legend="Legend teste" ></user-profile>
</div>
</template>
<script>
import userProfile from '../components/profile/user-profile.vue'

export default {
name:"profile",
components:{
    userProfile
}

}
</script>