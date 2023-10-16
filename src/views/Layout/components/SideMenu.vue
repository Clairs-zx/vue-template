<!--
 * @Author: ZhXIn
 * @Date: 2023-10-13 10:17:45
 * @LastEditTime: 2023-10-13 17:57:54
 * @Description: 菜单组件
-->
<template>
  <a-menu theme="dark" :default-selected-keys="['/']" mode="inline" :open-keys="openKeys" @openChange="onOpenChange">
    <template v-for="menu in menuList">
      <a-sub-menu v-if="menu.children && menu.children.length > 0" :key="menu.menuKey">
        <span slot="title">
          <a-icon :type="menu.iconType" />
          <span>{{ menu.menuName }}</span>
        </span>
        <template v-for="subMenu in menu.children">
          <a-sub-menu v-if="subMenu.children && subMenu.children.length > 0" :key="subMenu.menuKey">
            <span slot="title">
              <a-icon :type="subMenu.iconType" />
              <span>{{ subMenu.menuName }}</span>
            </span>
            <a-menu-item v-for="subSubMenu in subMenu.children" :key="subSubMenu.menuKey">
              {{ subSubMenu.menuName }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else :key="subMenu.menuKey">
            <a-icon :type="subMenu.iconType" />
            <span>{{ subMenu.menuName }}</span>
          </a-menu-item>
        </template>
      </a-sub-menu>
      <a-menu-item v-else :key="menu.menuKey">
        <a-icon :type="menu.iconType" />
        <span>{{ menu.menuName }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      openKeys:[],
      menuList: [
        {
          menuName: '首页',
          iconType: 'home',
          menuKey: '/',
        },
        {
          menuName: '组件使用',
          iconType: 'desktop',
          menuKey: '/Components',
          children: [
            {
              menuName: '表格',
              iconType: 'edit',
              menuKey: '/Components/Table',
            },
            {
              menuName: '表单',
              iconType: 'edit',
              menuKey: '/Components/Form',
              children: [
                {
                  menuName: 'a-form',
                  iconType: 'edit',
                  menuKey: '/Components/Form/AFORM',
                },
                {
                  menuName: 'a-model-form',
                  iconType: 'edit',
                  menuKey: '/Components/Form/MODELFORM',
                },
              ],
            },
          ],
        },
        {
          menuName: '组件封装',
          iconType: 'desktop',
          menuKey: '/AllComponents',
          children: [
            {
              menuName: '输入框',
              iconType: 'edit',
              menuKey: '/AllComponents/input',
            },
            {
              menuName: '选择器',
              iconType: 'edit',
              menuKey: '/AllComponents/seletor',
            },
          ],
        },
      ],
    }
  },
  methods:{
    onOpenChange(openKeys){
const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
    }
  }
}
</script>

<style lang="less" scoped>
</style>
