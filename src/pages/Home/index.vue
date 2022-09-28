<!--
 * @Description:
 * @Autor: 王敏
 * @LastEditTime: 2022-09-28 16:27:52
-->
<template>
  <div class="homePage">
    <ul class="handler">
      <li @click="_logout">
        <img :src="quit" alt="" />
        退出登录
      </li>
      <li @click="$message.info('该功能暂未开通')">
        <img :src="modify" alt="" />
        修改密码
      </li>
    </ul>
    <div class="title">
      <div class="titleL">
        <span />
        <span>宗教治理管理平台</span>
      </div>
      <div class="titleR">
        {{ time }}
        <i />
        <img :src="avatar" alt="" />
        {{ userName }}，欢迎您
      </div>
    </div>

    <!-- 主应用部分  -->
    <ul class="main">
      <li
        v-for="(module, index) in moduleList"
        :key="index"
        @click="handleModuleClick(module)"
      >
        <div>
          <img :src="module.icon" alt="" />
        </div>
        <p>{{ module.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import icons from "./utils/icon";
import { CUSTOMDATE } from "@utils/config";
import api from "@api";
import { menuList } from "./utils/dictionary";

const { logout } = api.login;
const { getMenu, getUserInfo } = api.user;
export default {
  data() {
    return {
      quit: require("./img/quit.png"),
      modify: require("./img/modify.png"),
      avatar: require("./img/avatar.png"),
      timer: null, // 当前时间计时器
      time: null, // 当前时间
      userName: null, // 用户名
      moduleList: [], // 模块列表
    };
  },
  mounted() {
    this._initData();
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    _initData() {
      this.timer = setInterval(() => {
        this.time = CUSTOMDATE(new Date(), 3, "/");
      }, 1000);
      // TODO:获取模块列表接口
      Promise.resolve().then(() => {
        const modules = [];
        menuList.forEach((module) => {
          const { name, path } = module;
          const { icon, url } = icons[path] || {};
          modules.push({
            name,
            icon,
            url,
            module,
          });
        });
        this.moduleList = modules;
      });
      // TODO:获取用户信息接口
      Promise.resolve().then(() => {
        this.userName = "打工人";
      });
      // 获取模块列表
      // getMenu().then(({ code, data }) => {
      //   const modules = []
      //   if (code === 200) {
      //     data.forEach(module => {
      //       const { name, path } = module
      //       const { icon, url } = icons[path] || {}
      //       modules.push({
      //         name,
      //         icon,
      //         url,
      //         module
      //       })
      //     })
      //     this.moduleList = modules
      //   }
      // })
      // getUserInfo().then(({ code, user }) => {
      //   if (code === 200) {
      //     this.userName = user?.userName
      //   }
      // })
    },
    handleModuleClick({ url, module }) {
      this.$globalStore.setGlobalState({ subMenu: module });
      console.log(111111111111, url);
      this.$router.push(url);
    },
    // 退出登录
    _logout() {
      // TODO:调退出登录接口
      Promise.resolve().then(() => {
        localStorage.clear();
        this.$router.push("/login");
      });
      // logout().then(msg => {
      //   localStorage.clear()
      //   this.$router.push('/login')
      // })
    },
  },
};
</script>
<style lang='less' scoped>
@import "./index.less";
</style>
