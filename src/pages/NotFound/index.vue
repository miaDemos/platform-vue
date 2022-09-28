<!--
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-07-06 11:42:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-13 11:18:49
-->
<template>
  <div class="page">
    <img :src="notFound" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      notFound: require("./img/notFound.png"),
    };
  },
  mounted() {
    console.log("我是404");
  },
  methods: {},
};
</script>
<style lang='less' scoped>
.page {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  img {
    width: 380px;
    height: 360px;
  }
}
</style>
