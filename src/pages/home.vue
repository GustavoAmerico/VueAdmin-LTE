<template>
     <!-- Main content -->
    <section class="content">
      <h4 class="text-center">
        您好，张三
      </h4>
      <h2 class="text-center" click="onClick();">
        welcome
        <button @click="onClick">click</button>
      </h2>
    </section>
   
</template>
<script>

export default {
  name:"homePage",
  props: [ 'lib'], 
  data(){
  	return {
  		title:"Home page",
  		v:"Version 2.0"
  	}
  },
  methods:{
      onClick:function(){
      debugger; 
       window.alert('click');
    }
  }
}
  
</script>