<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :right="$vuetify.rtl"
    :src="require('../assets/img/' + barImage)"
    mobile-breakpoint="760"
    app
    width="270"
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
      <v-img src="../assets/img/estimate.svg" />
      <div class='sub-title'>
        ADMINISTRATOR
      </div>
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >
      <template v-for="(item, i) in mainMenu">
        <base-item
          :key="`item-${i}`"
          :item="item"
        />
      </template>
    </v-list>
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
      barColor: 'rgba(60, 135, 230, .9), rgba(60, 135, 230, .7)',
      barImage: 'sideback.png',
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
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-image__image--cover 
      background-size: 100% 100%
    .v-list-group__header.v-list-item--active:before
      opacity: .25
    .primary
      background-color: rgba(255, 255, 255, 0.35) !important
    .sub-title
      text-align: center
      font-size: 24px
      font-weight: 700
      color: rgba(255,255,255,0.5)
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
          margin-bottom: 20px
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
