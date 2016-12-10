<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img v-bind:src="oauth.photo" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{oauth.name}}</p>
          <a href="#"><i class="fa fa-circle text-success"></i>{{oauth.legend}}</a>
          
        </div>
        
      </div>
      <ul class="sidebar-menu">
        <li class="header">{{lib.navigation}}</li>

        <li v-for="$menu in loadFromServer">
          <a href="#" v-if="Array.isArray($menu.subMenus)">
            <i class="fa fa-files-o"></i>
            <span>{{$menu.text}}</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>

          <ul class="treeview-menu" v-if="Array.isArray($menu.subMenus)">
            <!--v-bind:class="{ active: $route.path == $subMenu.route}"-->
            <li v-for="$subMenu in $menu.subMenus">
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
  created(){
 this. oauth=this.$store.state.oauth;
    this.lib ={
      navigation:{}
    }
    
  },
  data(){

    return {
      
      oauth:{},
      lib: {},
     
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