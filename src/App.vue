<template>
  <v-app>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <transition name="fade">
      <loader></loader>
    </transition>
    <transition name="fade">
      <vue-snotify></vue-snotify>
    </transition>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import Loader from '@/components/directives/loader/index.vue/'

  import {mapGetters} from 'vuex'
  import {
    UPDATE_LOADER_STATE,
  } from '@/store/mutations-types'

  export default {
    name: 'app',
    components: {
      'Loader': Loader
    },
    computed: {
      ...mapGetters({
        globalSnotify: 'snotify/getSnotifyData'
      })
    },
    watch: {
      globalSnotify: {
        immediate: true,
        deep: true,
        handler(newVal, oldVal) {
          if(newVal && newVal.type !== null && newVal.text !== null) {
            this.$snotify[newVal.type](newVal.text)
          }
        }
      }
    },
    created() {

    },
    methods: {

    },
  }
</script>

<style lang="sass" src="./assets/sass/main.sass"></style>