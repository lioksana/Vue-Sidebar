<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />
    
    <v-spacer />
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
      <v-icon size="50" color=rgb(125,125,125)>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  // Components
  // import { VHover, VListItem } from 'vuetify/lib'

  // Utilities
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'DashboardCoreAppBar',
    components: {
      
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
</script>

<style lang='sass'>
  .login
    margin-top: -8px
  .loginname
    text-align: right
    font-size: 20px
    font-weight: 700
  .fullname
    text-align: center
    font-size: 14px
</style>