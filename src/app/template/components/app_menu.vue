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

        <router-link v-if="$menu.meta.internalRoute !==true" 
        active-class="active" tag="li" 
        v-bind:to="$menu.path" 
        v-for="$menu in $store.state.menus"
        v-bind:name="$menu.name" 
        v-bind:class="{ treeview: Array.isArray($menu.children)  }">

          <a>
            <i v-bind:class="$menu.meta.icon"></i>
            <span>{{$menu.meta.publicTitle}}</span>
            <span class="pull-right-container" v-if="Array.isArray($menu.children)">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>

          <ul class="treeview-menu" v-if="Array.isArray($menu.children)">

            <router-link v-if="$subMenu.meta.internalRoute !==true" active-class="active" tag="li" v-for="$subMenu in $menu.children"
              v-bind:name="$subMenu.name" v-bind:to="$subMenu.path">
              <a>

                <i :class="$subMenu.meta.icon"></i> {{$subMenu.meta.publicTitle}}
              </a>
            </router-link>

          </ul>

        </router-link>

      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script> 
  export default {
    name: 'appMenu',
    locales: {
      "en-US": { navigation: "Menu" },
      "pt-BR": { navigation: "Painel de navegação" }
    }
  }
</script>