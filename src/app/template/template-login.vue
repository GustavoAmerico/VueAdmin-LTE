<!-- index.vue -->
<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="/#" class="logo">{{$t('appTitle')}}</a>
    </div>
    <div class="login-box-body">
      <router-view></router-view>
      <footer class="main-footer col-lg-12">
        <div class="pull-right hidden-xs">
          <b>Version</b> 0.0.1
        </div>
        <strong>Copyright &copy; 2016 - 2018  Gustavo Américo<br>
    </footer> 
    </div>
    
 </div> 
</template>
<script>
  export default {
    name: "template-oauth",
    "meta": {
      "icon": "fa fa-home",
      "smallTitle": "OAuth Template",
      "publicTitle": "OAuth"       
    },
    created() {
      document.body.className = "hold-transition login-page";

    },

    data() {

      //this.lib = this.$parent.lib;
      return {

      }
    },
    methods: {}
  }

</script>