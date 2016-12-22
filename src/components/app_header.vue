<template>
  <header class="main-header">

    <!-- Logo -->
    <a href="/#" class="logo">
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"> 
          {{$t('appTitle')}}
        </span>
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">
        {{ $t("appTitleMini") }} 
        </span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="/#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">
          <!--Toggle navigation-->
        </span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <quick-task></quick-task>
          <quick-message class="dropdown messages-menu"></quick-message>
          <quick-notify class="dropdown notifications-menu"></quick-notify>

          <!-- Tasks: style can be found in dropdown.less -->
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img v-bind:src="$store.state.oauth.photo" class="user-image" alt="User Image">
              <span class="hidden-xs">{{$store.state.oauth.name}}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img v-bind:src="$store.state.oauth.photo" class="img-circle" alt="User Image">
                <p>
                  {{$store.state.oauth.name}}
                  <small>
                    {{$store.state.oauth.legend}}
                  </small>
                </p>
              </li>
              <li>
                <form novalidate class="form-group">
                  <select v-model="selected" class="form-control">
                      <option v-for="lang in langs" 
                      :value="lang.code">{{ lang.text }}</option>
                  </select>
                </form>
              </li>
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">
                    {{ $t('profile') }}
                    </a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">
                    {{ $t('signout') }} 
                      </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </nav>
  </header>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'appHeader',
    created() {

    },
    data() {
      return {
        selected: Vue.config.lang,
        langs: Vue.locales
      }
    },
    methods: {},
    components: {},
    locales: {
      "en-US": { signout: "Sign Out" },
      "pt-BR": { signout: "Sair" }
    },
    watch: {
      /*Altera o idioma da aplicação*/
      selected(val, old) {
        var self = this
        Vue.config.lang = val
      }
    }

  }

</script>