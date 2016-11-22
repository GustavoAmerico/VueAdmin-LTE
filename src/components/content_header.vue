<!-- content_header.vue -->
<template>
	<section class="content-header">
		<h1>
			{{title}}
			<small>{{v}}</small>
		</h1>
		<ol class="breadcrumb">
			<li v-for="(i,index) in menuList" v-bind:class="{ active: i.isActive}">{{i.text}}</li>

		</ol>
	</section>
</template>
<script>
export default {
name: 'breadcrumb',
props: ['lib','title','v'],
data(){
  	return {
			menuList:[
          {
            text:"alguma coisa",
            isActive:false
          },
          {
            text:"alguma coisa",
            isActive:true
          }
        ]
  	}
  }


  
  
}
</script>