<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :right="$vuetify.rtl"
    :src="require('../assets/img/' + barImage)"
    mobile-breakpoint="760"
    app
    width="300"
    v-model="sidebar"
    v-bind="$attrs"
  >
    <v-divider class="mb-3" />
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        :src="props"
        height="100%"
      />
    </template>
    <v-list
      dense
      nav
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-icon size="40">mdi-alarm</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <div class="title">
            <div>E</div>
            <div>STIMATE</div>
            <div>IT</div>
          </div>          
        </v-list-item-content>
      </v-list-item>
      <div class='sub-title'>
        ADMINISTRATOR
      </div>
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >
      <template v-for="(item, i) in computedItems">
        <base-item
          :key="`item-${i}`"
          :item="item"
        />
      </template>
    </v-list>
    <template v-slot:append>
      <v-divider/>
      <v-list>
        <v-list-item>
          <v-list-item-avatar size="50">
            <v-img :src="require('../assets/avatar/' + login.loggedInUser.avatar)"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <div class='footer-name'>
              {{login.loggedInUser.fullName}}
            </div>          
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
  import BaseItem from './base/Item'
  export default {
    name: 'Sidebar',
    components : {
      BaseItem,
    },

    data: () => ({
      barColor: 'rgba(0, 0, 0, .9), rgba(0, 0, 0, .4)',
      barImage: 'sidebar.jpg',
      sidebar: null,
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
    
    computed: {
      computedItems () {
        return this.mainMenu.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
        }
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: item.title,
        }
      },
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item__avatar:first-child 
        margin-right: 12px
        margin-left: 22px
    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important
      .title
        display: inherit
        margin-top: 10px
        div:first-child
          font-size: 40px
          transform: scale(0.9, 1.2)
          margin-top: -3px
        div:nth-child(2)
          font-size: 30px
          transform: scale(0.85, 1.3)
          margin-left: -10px
        div:nth-child(3)
          font-size: 40px
          margin-top: -1px
          margin-left: -10px
          transform: scale(0.9, 1.2)
    .sub-title
      text-align: center
      font-size: 26px
      font-weight: 500
      color: rgba(255,255,255,0.4)
      margin-bottom: 20px
    .footer-name
      // text-align: center
      color: white
      font-size: 18px
      margin: 10px 6px 10px 6px
      // border: 1px solid rgba(255,255,255,0.2)
      // border-radius: 5px
      padding: 10px 0px
    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-item__icon
      margin: 12px 0
    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
