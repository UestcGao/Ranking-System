<template>
    <el-container>
        <el-aside>
            <div class="aside-header">年级成绩显示</div>
            <sidebar />
        </el-aside>
        <el-container class="main-container">
            <header class="el-header">
                <navbar />
                <tagsview  />
            </header>
            <AppMain  />
        </el-container>
    </el-container>
</template>
<script>
import { AppMain , sidebar , navbar , tagsview} from './components'
export default {
    name:'layout',
    components:{ AppMain,sidebar,navbar,tagsview }
}
</script>
<style lang='scss' scoped>
.main-container{
    display: flex;
    flex-direction: column;
    // .el-header{
    //     flex:1;
    // }
}
.aside-header{
    height: 90px;
    border-bottom: 1px rgba(227, 227, 227,1) solid;
    height: 50px;
  line-height: 50px;
  font-size: 14px;
  font-weight: bold;
  text-indent: 5.5em;
  padding-bottom: 10px;
  background: url("../../assets/Uestc.png") no-repeat 13px 15px;
  background-size: 60px;
}
</style>