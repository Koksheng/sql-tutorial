<template>
  <div id="app">
    <a-row class="header" type="flex" align="middle">
      <a-col flex="200px" style="margin: 0 auto">
        <RouterLink to="/">
          <a-row align="middle">
            <img src="./assets/logo.png" alt="鱼皮SQL" class="logo" />
            <span class="title">SQL Selt-Study</span>
          </a-row>
        </RouterLink>
      </a-col>
      <a-col flex="auto">
        <a-menu
          :selected-keys="selectedKeys"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
          @click="doClickMenu"
        >
          <a-menu-item key="/learn">Study</a-menu-item>
          <a-menu-item key="/levels">Level</a-menu-item>
          <a-menu-item key="/playground">Playground</a-menu-item>
          <a-menu-item>
            <a href="https://github.com/liyupi" target="_blank">
              <github-outlined /> Code Creator
            </a>
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      SQL Selt-Study - A self-study website ©2024 maintained by
      <a href="https://github.com/Koksheng" target="_blank">Gue Kok Sheng</a>
    </div>
    <a-back-top :style="{ right: '24px' }" />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  GithubOutlined,
} from '@ant-design/icons-vue';

const route = useRoute();
const router = useRouter();
const selectedKeys = computed(() => [route.path]);

/**
 * 点击菜单跳转
 * @param key
 */
const doClickMenu = ({ key }: any) => {
  if (key) {
    router.push({
      path: key,
    });
  }
};
</script>
<style scoped>
.header {
  border-bottom: 1px solid #f0f0f0;
  padding: 0 24px;
}

.ant-menu-horizontal {
  border-bottom: none !important;
}

.logo {
  width: 56px;
}

.title {
  margin-left: 8px;
  font-size: 20px;
  color: #000;
}

.content {
  padding: 24px;
}

.footer {
  padding: 12px;
  text-align: center;
  background: #efefef;
}
</style>
