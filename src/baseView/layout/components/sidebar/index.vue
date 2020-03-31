<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      class="wms-menu"
      router
    >
      <!-- :collapse="isCollapse" -->
      <!-- mode="vertical" -->
      <!-- v-show="route.path !== ''" -->
      <sidebar-item
        v-for="route in router"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script>
import { mapGetters, mapState } from "vuex"
import SidebarItem from "./sidebaritem"
export default {
  name: "sidebar",
  components: { SidebarItem },
  props: {
    mode: {
      type: String,
      default: "vertical"
    }
  },
  computed: {
    ...mapGetters(["router", "sidebar"]),
    ...mapState({
      router: state => state.permission.routers.filter(item => !item.hidden)
    }),
    isCollapse() {
      console.log("iscollapse", !this.sidebar)
      return !this.sidebar
    }
  },
  mounted() {
    console.log("router:    ", this.router)
  }
}
</script>
<style scoped>
.siderbar {
  height: 100%;
  /* background: red; */
}
</style>
