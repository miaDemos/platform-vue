<!--
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-07-01 16:34:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-20 11:54:28
-->
<template>
  <div id="app">
    <router-view />
    <div id="subapp-viewport" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: function () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
p,ul{
  margin-bottom: 0;
}
</style>
