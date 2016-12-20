<template>
    <div class="box box-primary">
        <div class="box-body box-profile">
            <img class="profile-user-img img-responsive img-circle" 
                        property="image" 
                        :src="photo"
                        alt="User profile picture {userName}">

            <h3 property="name" class="profile-username text-center">{{userName}}</h3>

            <p property="alternateName" class="text-muted text-center">{{legend}}</p>

            <ul class="list-group list-group-unbordered">
                <li class="list-group-item">
                    <b>Followers</b> <a class="pull-right">1,322</a>
                </li>
                <li class="list-group-item">
                    <b>Following</b> <a class="pull-right">543</a>
                </li>
                <li class="list-group-item">
                    <b>Friends</b> <a class="pull-right">13,287</a>
                </li>
            </ul>

            <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
        </div>
        <!-- /.box-body -->
    </div>

</template>


<script> 
 
export default {
name: 'userProfile',
created(){
    
},
  data(){ 
   	return {     
           
    } 	
  },  
 props: ['photo','userName','legend'],
 methods:{}, 
 components:{ 
   },
 locales:{
        "en-US":{
             },
        "pt-BR":{
         
        }
      }, 
 watch: {
   
  } 

}

</script>