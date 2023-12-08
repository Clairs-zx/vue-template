<!--
 * @Author: ZhXIn
 * @Date: 2023-10-13 10:17:45
 * @LastEditTime: 2023-10-16 15:58:36
 * @Description: 菜单组件
-->
<template>
  <a-menu
    theme="dark"
    mode="inline"
    :open-keys="openKeys"
    @openChange="onOpenChange"
    :selectedKeys="selectedKeys"
    :inline-collapsed="collapsed"
  >
    <template v-for="menu in menuList">
      <a-sub-menu
        v-if="menu.children && menu.children.length > 0"
        :key="menu.menuKey"
      >
        <span slot="title">
          <!-- <i class="iconfont" :class="menu.iconType" /> -->
          <a-icon :type="menu.iconType"></a-icon>
          <span>{{ menu.menuName }}</span>
        </span>
        <template v-for="subMenu in menu.children">
          <a-sub-menu
            v-if="subMenu.children && subMenu.children.length > 0"
            :key="subMenu.menuKey"
          >
            <span slot="title">
              <!-- <a-icon :type="subMenu.iconType" /> -->
              <span>{{ subMenu.menuName }}</span>
            </span>
            <a-menu-item
              v-for="subSubMenu in subMenu.children"
              :key="subSubMenu.menuKey"
              @click="clickMenu(subSubMenu.menuKey)"
            >
              {{ subSubMenu.menuName }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item
            v-else
            :key="subMenu.menuKey"
            @click="clickMenu(subMenu.menuKey)"
          >
            <!-- <a-icon :type="subMenu.iconType" /> -->
            <span>{{ subMenu.menuName }}</span>
          </a-menu-item>
        </template>
      </a-sub-menu>
      <a-menu-item v-else :key="menu.menuKey" @click="clickMenu(menu.menuKey)">
        <a-icon :type="menu.iconType" />
        <span>{{ menu.menuName }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
  export default {
    name: 'SideMenu',
    props: ['collapsed'],
    data() {
      return {
        openKeys: [],
        selectedKeys: ['/'],
        menuList: [
          {
            menuName: '首页',
            iconType: 'home',
            menuKey: '/',
          },
          {
            menuName: '图标库',
            iconType: 'home',
            menuKey: '/Iconfont',
          },
          {
            menuName: '基础组件',
            iconType: 'appstore',
            menuKey: '/Components',
            children: [
              {
                menuName: '面包屑',
                menuKey: '/Components/Breadcrumb',
              },
              {
                menuName: '选择器',
                menuKey: '/Components/Selector',
              },
              {
                menuName: '标签页',
                menuKey: '/Components/Tabs',
              },
              {
                menuName: '表格',
                menuKey: '/Components/Table',
              },
              {
                menuName: '表单',
                menuKey: '/Components/Form',
                children: [
                  {
                    menuName: 'Form表单',
                    menuKey: '/Components/Form/Form',
                  },
                  {
                    menuName: 'FormModel表单',
                    menuKey: '/Components/Form/FormModel',
                  },
                ],
              },
            ],
          },
          {
            menuName: '封装组件',
            iconType: 'project',
            menuKey: '/ComposedComponent',
            children: [
              {
                menuName: '输入框',
                menuKey: '/ComposedComponent/Input',
              },
              {
                menuName: '选择器',
                menuKey: '/ComposedComponent/Seletor',
              },
            ],
          },
          {
            menuName: '第三方插件',
            iconType: 'shop',
            menuKey: '/Plugins',
            children: [
              {
                menuName: 'VJstree',
                menuKey: '/Plugins/VJstree',
              },
              {
                menuName: 'Draggable',
                menuKey: '/Plugins/Draggable',
              },
              {
                menuName: 'DraggablePlus',
                menuKey: '/Plugins/DraggablePlus',
              },
              {
                menuName: 'SortableJS',
                menuKey: '/Plugins/SortableJS',
              },
              {
                menuName: 'AntvX6',
                menuKey: '/Plugins/AntvX6',
              },
              {
                menuName: 'Animate',
                menuKey: '/Plugins/Animate',
              },
            ],
          },
        ],
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler() {
          this.openKeys = []
          this.$route.matched.forEach((item) => {
            this.openKeys.push(item.path)
          })
          this.selectedKeys = this.openKeys.slice(this.openKeys.length - 1)
          if (this.selectedKeys[0] === '/Home/') {
            this.selectedKeys = ['/']
          }
        },
      },
      collapsed(val) {
        console.log(val)
      },
    },
    methods: {
      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.findLast(
          (key) => this.openKeys.indexOf(key) === -1
        )
        if (!latestOpenKey) this.openKeys = openKeys
        else {
          this.openKeys = openKeys.filter((item) => {
            return latestOpenKey.indexOf(item) !== -1
          })
        }
      },
      clickMenu(path) {
        this.$router.push({
          path,
        })
      },
    },
  }
</script>

<style lang="less" scoped></style>
