<template>
  <v-app>
    <Sidebar :mainMenu="mainMenu"/>
    <Appbar :login="login"/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar';
import Appbar from './components/AppBar';
export default {
  name: 'App',
  data:() =>({
    mainMenu: [
      { label: 'UŻYTKOWNICY', icon: 'mdi-account', to: '/' },
      { label: 'GRUPY', icon: 'mdi-account-group', to: '/views/groups' },
      { label: 'LOKALIZACJE', icon: 'mdi-map-marker', to: '/views/locations' },
      { label: 'KLASY', icon: 'mdi-google-classroom', to: '/views/class' },
      { label: 'PRZYCZYNY', icon: 'mdi-atom-variant', to: '/views/causes' },
      { label: 'TAGI', icon: 'mdi-code-tags', to: '/views/tags' },
      { label: 'ZDARZENIA', icon: 'mdi-bell', to: '/views/events' },
    ],
    login:{
      showLoginWindow: false,
      loggedInUser:{
        login: "rajez",
        fullName: "Zbigniew Rajewski",
        groups:{1: {id: 1, name: "ADMIN"}},
        avatar: "avatar.jpg"
      }
    },
  }),
  components: { 
    Sidebar,
    Appbar,
  },
};
</script>
