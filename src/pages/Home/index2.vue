<!--
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-07-06 11:41:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-13 11:18:22
-->
<template>
  <div>
    <h3>主应用home页面</h3>
    <button @click="changeToken">修改token :{{ token }}</button>
    <ul>
      <li @click="goto('/subvue')">跳转vue应用</li>
      <li @click="goto('/a')">跳转a页面</li>
      <!-- <li @click="goto('/sub-react')">
        跳转react应用
      </li> -->
    </ul>
  </div>
</template>

<script>
import globalStore from "@/globalStore";
export default {
  data() {
    return {};
  },
  computed: {
    token() {
      return globalStore.getGlobalState("token");
    },
  },
  mounted() {
    console.log(11, localStorage.getItem("token"));
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    changeToken() {
      globalStore.setGlobalState({ token: "5678" });
    },
  },
};
</script>
<style lang='less' scoped>
</style>
