<template>
  <div>
    <div class="class-header">
      <!-- <div /> -->
      班级信息列表
    </div>
    <div class="class-search">
      <span>检索</span>
      <el-input v-model="searchClass" clearable size="mini" />
    </div>
    <div>
      <el-table refs="classTable" :data="classDataSource" border stripe tooltip-effect="white">
        <el-table-column type="index" align="center" label="顺序" width="50" fixed />
        <el-table-column width="150" prop="name" label="班级名" />
        <el-table-column prop="type" label="类别" />
        <el-table-column width="150" label="操作" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="handleCheckInfo(scope.row)">查看</el-button>
            <el-button v-if="IsAuthority(scope.row.headTeacher)" type="text" @click="handleImport">录入</el-button>
            <el-button v-else type="text">对比</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Class',
  data() {
    return {
      searchClass: '1312',
      classDataSource: [
        {
          id: 'a',
          name: '一班',
          type: '理科',
          headTeacher: 'amdin'
        },
        {
          id: 'b',
          name: '二班',
          type: '文科',
          headTeacher: 'amdin'
        },
        {
          id: 'c',
          name: '三班',
          type: '理科',
          headTeacher: 'amdin'
        },
        {
          id: 'd',
          name: '四班',
          type: '理科',
          headTeacher: 'amdin'
        },
        {
          id: 'e',
          name: '五班',
          type: '理科',
          headTeacher: 'amdin'
        },
        {
          id: 'f',
          name: '六班',
          type: '文科',
          headTeacher: 'amdin'
        }
      ]
    }
  },
  mounted() {
    console.log(this.$store.state.user.name)
  },
  methods: {
    handleCheckInfo(row) {
      console.log(row)
      this.$router.push({ name: 'classScore', params: { id: row.id }})
    },
    IsAuthority(name) {
      return this.$store.state.user.name === name
    },
    // IsSameType(row) {
    //   const { type, headTeacher } = row
    //   const user = this.$store.state.user
    //   return type === user.type && headTeacher !== user.name
    // },
    handleImport() {
      console.log('12')
    }
  }
}
</script>
<style lang="scss" scoped>
.class-header {
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  font-weight: bolder;
  text-indent: 20px;
  border-bottom: 1px rgba(227, 227, 227, 1) solid;
}
.class-search {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  text-indent: 20px;
  border-bottom: 1px rgba(227, 227, 227, 1) solid;
  .el-input {
    width: 180px;
    margin-left: -10px;
  }
}
</style>
