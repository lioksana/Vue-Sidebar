<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="#cccccc"
    height="75"
  >
    
    <div class="main-content">
      <div id="dot-btn">
        <v-btn
          class="mr-3"
          elevation="1"
          fab
          small
          @click="setDrawer(!drawer)"
        >
          <v-icon>
            mdi-dots-vertical
          </v-icon>
        </v-btn>
      </div>
      <div id='title'>
        <v-toolbar-title
          class="font-weight-light"
          v-text="'Users defined in the system by the administrator - Admin'"
        />
      </div>
      <div class='login-content'>
        <div class="login">
          <div class='loginname'>{{login.loggedInUser.login}}</div>
          <div class='fullname'>{{login.loggedInUser.fullName}}</div>
        </div>
      
        <v-btn
          icon  
          class="ml-2 mr-1"
          min-width="0"
          to="/" 
        >
          <v-icon size="57" color=rgb(125,125,125)>mdi-account</v-icon>
        </v-btn>
      </div>
    </div>
    <div id='hide-title'>{{"Users defined in the system by the administrator - Admin"}}</div>
  </v-app-bar>
</template>

<script>
  // Utilities
  import { mapState, mapMutations } from 'vuex'
  var $ = require('jquery')
  export default {
    name: 'DashboardCoreAppBar',
    components: {
      
    },

    mounted(){
      // console.log($('#dot-btn').css('width'));
    },
    props: [
      'login'
    ],

    data: () => ({
     
    }),

    computed: {
      ...mapState(['drawer']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
  $(document).ready(function(){
    resize()
  })
  $(window).resize(function(){
    resize()
  })
  function resize(){
    var btnRight =  300 + parseInt($('#dot-btn').css('width'));
    var titleRight = 300 + parseInt($('#dot-btn').css('width')) + parseInt($('#title').css('width'));
    var loginLeft = parseInt($(".login-content").offset().left);
    var realWidth = loginLeft - btnRight;
    var totalWidth = realWidth + parseInt($('#dot-btn').css('width')) + parseInt($('.login-content').css('width'))
    if(window.innerWidth < 760 ){
      realWidth += 280;
      totalWidth += 300;
    }
    if(titleRight >= loginLeft){      
      $('#title').css('visibility', 'hidden');
      $('#hide-title').css('visibility', 'visible');
      if(realWidth > 250){
        $('#hide-title').css('width', realWidth);
        $('#hide-title').css('top', 20);
        $('#hide-title').css('left', 70);
        $('#app-bar').css('height', 75);
        $('.v-main').css('padding-top', 75);
      }      
      else{
        $('#hide-title').css('width', totalWidth);
        $('#hide-title').css('top', 70);
        $('#hide-title').css('left', 17);
        $('#app-bar').css('height', 120);
      $('.v-main').css('padding-top', 120);
      }
    } else {
      $('#title').css('visibility', 'visible');
      $('#hide-title').css('visibility', 'hidden');
      $('#app-bar').css('height', 75);
      $('.v-main').css('padding-top', 75);
    }
  }
  
  
</script>

<style lang='sass'>
  #app-bar
    position: fixed
    z-index: 5
  #hide-title
    visibility: hidden
    position: absolute
    font-size: 1.25rem
    font-weight: 300
    width: 100%
    top: 57px
    margin-left: 0px
    text-align: left
    line-height: 100%
  .main-content
    display: contents    
    .login-content
      display: flex
      right: 0
      position: absolute
      margin-right: 7px
      margin-left: 7px
      .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before
        opacity: 0
      .login        
        .loginname
          margin-top: -3px
          text-align: right
          font-size: 20px
          font-weight: 700
        .fullname
          text-align: center
          font-size: 14px
          margin-top: -1px

</style>