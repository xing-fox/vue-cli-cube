<style lang="less" scoped>
  .page{
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>

<template>
  <div class="page">
    <router-view />
    <c-footer @tabChange="change"></c-footer>
  </div>
</template>

<script>
import CFooter from '@/components/common/footer'
export default {
  name: 'Main',
  components: {
    CFooter
  },
  methods: {
    change (eq) {
      console.log(eq)
    }
  }
}
</script>
