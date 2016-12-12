<!-- content_header.vue -->
<template>
	<section class="content-header">
		<h1>
			{{$route.name}}
			<small>{{$route.meta.smallTitle}}</small>
		</h1>
		<ol class="breadcrumb">
			<!--<li v-for="(i,index) in menuList" v-bind:class="{ active: i.isActive}">{{i.text}}</li>	\	-->
			<li v-for="($routeItem, index) in $route.matched" class="active">
				<router-link v-bind:name="$routeItem.name" v-bind:to="$routeItem.path">
					<i v-bind:class="$routeItem.meta.icon"></i>{{$routeItem.name}}
				</router-link>
			</li>
		</ol>
	</section>
</template>
<script>
export default {
name: 'breadcrumb',
   
}
</script>