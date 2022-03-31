﻿export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/setting',
    name: '系统管理',
    icon: 'setting',
    routes: [
      {
        path: '/setting/menu',
        name: '菜单管理',
        component: './setting/Menu',
      },
      {
        path: '/setting/role',
        name: '角色管理',
        component: './setting/Role',
      },
      {
        path: '/setting/org',
        name: '组织管理',
        component: './setting/Org',
      },
      {
        path: '/setting/user',
        name: '用户管理',
        component: './setting/User',
      },
      {
        path: '/setting/log',
        name: '日志管理',
        component: './setting/SysLog',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];