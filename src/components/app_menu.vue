<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Meu Nome</p>
          <a href="#"><i class="fa fa-circle text-success"></i>alguma coisa</a>
        </div>
      </div>
      <!-- search form -->
      <!--<form action="#" method="get" class="sidebar-form">-->
      <!--<div class="input-group">-->
      <!--<input type="text" name="q" class="form-control" placeholder="Search...">-->
      <!--<span class="input-group-btn">-->
      <!--<button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>-->
      <!--</button>-->
      <!--</span>-->
      <!--</div>-->
      <!--</form>-->
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">{{lib.navegation}}</li>

        <li v-for="$menu in loadFromServer" >
          <a href="#" v-if="Array.isArray($menu.subMenus)">
            <i class="fa fa-files-o"></i>
            <span>{{$menu.text}}</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>

          <ul class="treeview-menu" v-if="Array.isArray($menu.subMenus)">
<!--v-bind:class="{ active: $route.path == $subMenu.route}"-->
            <li v-for="$subMenu in $menu.subMenus"  >
              <router-link v-bind:to="$subMenu.route"><i :class="$subMenu.icon"></i>{{$subMenu.text}}</router-link>
            </li>
          </ul>
          <router-link v-bind:name="$menu.text" v-else v-bind:to="$menu.route">
            <i v-bind:class="$menu.icon"></i>{{$menu.text}}
          </router-link>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
export default {
  name: 'menu',
  props:["lib"] ,
  methods:{    }  ,
  data(){
  	return {
 loadFromServer: [
        {
          text:"Startup",
          route:"/",
          icon:"glyphicon glyphicon-home",
           
        },
        {
          text:"Home",
          route:"home",
          icon:"glyphicon glyphicon-home",
                   },
         {
          text:"Main",
          route:"#",
          icon:"glyphicon glyphicon-home",
          subMenus:[
              {
                text:"attendance",
                route:"attendance",
                icon:"fa fa-circle-o"
              },
              {
                text:"Leave record",
                route:"leave_record",
                icon:"fa fa-circle-o"
              }

                ]
        },

        {
          text:"Overtime Main",
          route:"#",
          icon:"glyphicon glyphicon-home",
          subMenus:[
              {
                text:"overtime record",
                route:"overtime_record",
                icon:"fa fa-circle-o"
              },
              {
                text:"Leave record",
                route:"leave_record",
                icon:"fa fa-circle-o"
              },
              {
                text:"Overtime Pass",
                route:"overtime_pass",
                icon:"fa fa-circle-o"
              }
                ]
        },
 {
          text:"Import Data",
          route:"#",
          icon:"glyphicon glyphicon-home",
          subMenus:[
              {
                text:"Import Data",
                route:"Import_Data",
                icon:"fa fa-circle-o"
              }]
        },

      ], 
  	} 
  
  
}
}
</script>