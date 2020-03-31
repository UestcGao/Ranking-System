<template>
  <el-menu-item
    v-if="onlyOne(item)"
    :index="resolvePath(item.children[0].path)"
  >
    <menu-item
      v-if="item.children[0].meta"
      :icon="item.children[0].meta.icon"
      :title="item.children[0].meta.title"
    ></menu-item>
  </el-menu-item>

  <el-submenu v-else ref="submenu" :index="resolvePath(item.children[0].path)">
    <!-- :icon="item.meta.icon" -->
    <menu-item v-if="item.meta" slot="title" :title="item.meta.title" />
    <!-- <template slot="title">
      <span>{{ item.children[0].meta.title }}</span>
    </template> -->
    <template v-for="child in item.children">
      <sidebar-item
        v-if="child.children && child.children.length > 0"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
      <el-menu-item
        v-if="!child.hidden"
        :key="child.name"
        :index="resolvePath(child.path)"
      >
        <!-- :icon="child.meta.icon" -->
        <menu-item v-if="child.meta" :title="child.meta.title" />
      </el-menu-item>
    </template>
  </el-submenu>
</template>
<script>
import path from "path"
import MenuItem from "./MenuItem"
// import Fix
export default {
  name: "SidebarItem",
  components: { MenuItem },
  props: {
    item: { type: Object, required: true },
    basePath: { type: String, default: "" },
    pathName: { type: String, default: "" }
  },
  mounted() {
    console.log(this.item.meta, "31")
  },
  methods: {
    resolvePath(routePath) {
      if (this.isExternal(routePath)) {
        return routePath
      }

      return path.resolve(this.basePath, routePath)
    },
    onlyOne(item) {
      //   console.log(item)
      if (item.path === "") return true
      return false
    },
    isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path)
    }
  }
}
</script>
