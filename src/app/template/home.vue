<template>
  <router-view></router-view>
</template>
<script>


  export default {
    name: "Home",
    props: ['lib'],
    data() {
      return {
        title: "Home page",
        v: "Version 2.0"
      }
    },
    methods: {
      onClick: function () {
        debugger;
        window.alert('click');

      }
    }
  }

</script>