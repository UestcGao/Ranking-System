<template>
  <div>
    <p>表格测试</p>
    <input v-show="false" id="upload" ref="upload" accept=".xls, .xlsx" type="file">
    <el-button @click="handleImportExcel">上传</el-button>
  </div>
</template>
<script>
import XLSX from 'xlsx'
// import { readFile } from 'xlsx/types'
export default {
  name: 'Grade',
  data() {
    return {
      excelDataSource: []
    }
  },
  mounted() {
    this.$refs.upload.addEventListener('change', e => {
      this.readExcel(e)
    })
  },
  methods: {
    readExcel(e) {
      const files = e.target.files
      if (files.length <= 0) {
        return false
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        console.log('上传文件格式错误')
      }

      const fileReader = new FileReader()
      fileReader.onload = ev => {
        try {
          const data = ev.target.result
          const workBook = XLSX.read(data, {
            type: 'binary'
          })
          console.log(workBook)
          const wsname = workBook.SheetNames[0]
          console.log(workBook.SheetNames)
          const ws = XLSX.utils.sheet_to_json(workBook.Sheets[wsname])
          console.log(ws)
        } catch {
          console.log('error')
        }
      }
      fileReader.readAsBinaryString(files[0])
    },
    handleImportExcel() {
      const input = document.getElementById('upload')
      console.log(input)
      input.click()
    }
  }
}
</script>
