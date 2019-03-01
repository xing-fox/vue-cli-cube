<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './style/common.less';
@import './style/animate.less';
#app {
  width: 100%;
}
</style>
