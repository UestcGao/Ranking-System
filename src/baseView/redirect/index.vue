<script>
export default {
  beforeCreate() {
    const { params, query } = this.$router
    const { path } = params
    console.log(path,query)
    this.$router.replace({ path: `/${path}`, query })
  },
  render(h) {
    return h()
  }
};
</script>
