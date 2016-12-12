<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img v-bind:src="$store.state.oauth.photo" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{$store.state.oauth.name}}</p>
          <a href="#"><i class="fa fa-circle text-success"></i>{{$store.state.oauth.legend}}</a>

        </div>

      </div>
      <ul class="sidebar-menu">
        <li class="header">{{ $t('navigation') }}</li>

        <li v-for="$menu in $store.state.menus">
          <a href="#" v-if="Array.isArray($menu.children)">
            <i class="fa fa-files-o"></i>
            <span>{{$menu.name}}</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>

          <ul class="treeview-menu" v-if="Array.isArray($menu.children)">
            <!--v-bind:class="{ active: $route.path == $subMenu.route}"-->
            <li v-for="$subMenu in $menu.children">
              <router-link v-bind:to="$subMenu.path">
                <i :class="$subMenu.meta.icon"></i>
                {{$subMenu.name}}
              </router-link>
            </li>
          </ul>
          <router-link v-bind:name="$menu.name" v-else v-bind:to="$menu.path">
            <i v-bind:class="$menu.meta.icon"></i>{{$menu.name}}
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
  locales:{
        "en-US":{navigation:"Menu"},
        "pt-BR":{navigation:"Painel de navegação"}
      }
   }
</script>