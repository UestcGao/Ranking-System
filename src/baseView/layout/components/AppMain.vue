<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
  </transition>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.fullPath
    },
    // ...mapState({cachedViews: state => state.tagsView.cachedViews,}),
  },
}
</script>

