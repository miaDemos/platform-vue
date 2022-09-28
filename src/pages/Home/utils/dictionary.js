/*
 * @Description:
 * @Autor: 王敏
 * @LastEditTime: 2022-09-28 16:25:17
 */
const menuList = [
  {
    name: '系统管理',
    path: 'system',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/icon_system_manage_1639451798319.png',
    meta: {
      title: '系统管理',
      icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/icon_system_manage_1639451798319.png',
      noCache: false,
      link: null
    },
    routes: [
      {
        name: '用户管理',
        path: 'userManager',
        hidden: false,
        component: 'system/user/index',
        icon: 'user',
        meta: {
          title: '用户管理',
          icon: 'user',
          noCache: false,
          link: null
        }
      },
      {
        name: '角色管理',
        path: 'roleManager',
        hidden: false,
        component: 'system/role/index',
        icon: 'peoples',
        meta: {
          title: '角色管理',
          icon: 'peoples',
          noCache: false,
          link: null
        }
      },
      {
        name: '菜单管理',
        path: 'menuManager',
        hidden: false,
        component: 'system/menu/index',
        icon: 'tree-table',
        meta: {
          title: '菜单管理',
          icon: 'tree-table',
          noCache: false,
          link: null
        }
      },
      {
        name: '机构部门管理',
        path: 'departmentManager',
        hidden: false,
        component: 'system/dept/index',
        icon: 'tree',
        meta: {
          title: '机构部门管理',
          icon: 'tree',
          noCache: false,
          link: null
        }
      }
    ]
  },
  {
    name: '巡检管理',
    path: 'patrol',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/dictionaries_1639451827798.png',
    meta: {
      title: '巡检管理',
      icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/dictionaries_1639451827798.png',
      noCache: false,
      link: null
    },
    routes: [
      {
        name: '检查项管理',
        path: 'items',
        hidden: false,
        component: 'Layout',
        icon: 'CopyOutlined',
        meta: {
          title: '检查项管理',
          icon: 'CopyOutlined',
          noCache: false,
          link: null
        }
      },
      {
        name: '检查项分类管理',
        path: 'type',
        hidden: false,
        component: 'Layout',
        icon: 'CopyOutlined',
        meta: {
          title: '检查项分类管理',
          icon: 'CopyOutlined',
          noCache: true,
          link: null
        }
      },
      {
        name: '表单管理',
        path: 'form',
        hidden: false,
        component: 'Layout',
        icon: 'CopyOutlined',
        meta: {
          title: '表单管理',
          icon: 'CopyOutlined',
          noCache: true,
          link: null
        }
      },
      {
        name: '表单(带规则)',
        path: 'rule',
        hidden: false,
        redirect: 'noRedirect',
        component: 'ParentView',
        alwaysShow: true,
        icon: 'CopyOutlined',
        meta: {
          title: '表单(带规则)',
          icon: 'CopyOutlined',
          noCache: true,
          link: null
        },
        routes: [
          {
            name: '表单规则列表',
            path: 'ruleList',
            hidden: false,
            component: 'Layout',
            icon: 'CopyOutlined',
            meta: {
              title: '表单规则列表',
              icon: 'CopyOutlined',
              noCache: true,
              link: null
            }
          },
          {
            name: '表单规则编辑',
            path: 'ruleAdd',
            hidden: false,
            component: 'Layout',
            icon: 'CopyOutlined',
            meta: {
              title: '表单规则编辑',
              icon: 'CopyOutlined',
              noCache: true,
              link: null
            }
          }
        ]
      },
      {
        name: '巡检计划管理',
        path: 'plan',
        hidden: false,
        redirect: 'noRedirect',
        component: 'ParentView',
        alwaysShow: true,
        icon: 'CopyOutlined',
        meta: {
          title: '巡检计划管理',
          icon: 'CopyOutlined',
          noCache: false,
          link: null
        },
        routes: [
          {
            name: '巡检计划列表',
            path: 'list',
            hidden: false,
            component: 'Layout',
            icon: '#',
            meta: {
              title: '巡检计划列表',
              icon: '#',
              noCache: true,
              link: null
            }
          },
          {
            name: '巡检计划编辑',
            path: 'add',
            hidden: false,
            component: 'Layout',
            icon: '#',
            meta: {
              title: '巡检计划编辑',
              icon: '#',
              noCache: true,
              link: null
            }
          }
        ]
      },
      {
        name: '宗教巡检任务',
        path: 'task',
        hidden: false,
        component: 'Layout',
        icon: 'CopyOutlined',
        meta: {
          title: '宗教巡检任务',
          icon: 'CopyOutlined',
          noCache: true,
          link: null
        }
      }
    ]
  },
  {
    name: '字典管理',
    path: 'dictionaries',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/patrol_1639451845594.png',
    meta: {
      title: '字典管理',
      icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/patrol_1639451845594.png',
      noCache: false,
      link: null
    },
    routes: [
      {
        name: '其他字段管理',
        path: 'other',
        hidden: false,
        component: 'Layout',
        icon: '#',
        meta: {
          title: '其他字段管理',
          icon: '#',
          noCache: true,
          link: null
        }
      },
      {
        name: '行政区划管理',
        path: 'administrative',
        hidden: false,
        component: 'Layout',
        icon: '#',
        meta: {
          title: '行政区划管理',
          icon: '#',
          noCache: true,
          link: null
        }
      },
      {
        name: '教别管理',
        path: 'teachOthers',
        hidden: false,
        component: 'Layout',
        icon: '#',
        meta: {
          title: '教别管理',
          icon: '#',
          noCache: true,
          link: null
        }
      },
      {
        name: '场所类别管理',
        path: 'siteCategory',
        hidden: false,
        component: 'Layout',
        icon: '#',
        meta: {
          title: '场所类别管理',
          icon: '#',
          noCache: true,
          link: null
        }
      },
      {
        name: '宗教场所管理',
        path: 'religioussites',
        hidden: false,
        component: 'Layout',
        icon: '#',
        meta: {
          title: '宗教场所管理',
          icon: '#',
          noCache: true,
          link: null
        }
      }
    ]
  },
  {
    name: '宗教团体信息',
    path: 'religionOrg',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/icon_religion_1639365958455.png',
    meta: {
      title: '宗教团体信息',
      icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/icon_religion_1639365958455.png',
      noCache: false,
      link: null
    },
    routes: [
      {
        name: '巡查小组管理',
        path: 'inspectionGroup',
        hidden: false,
        component: 'Layout',
        icon: '#',
        meta: {
          title: '巡查小组管理',
          icon: '#',
          noCache: true,
          link: null
        }
      }
    ]
  },
  {
    name: '安全管理',
    path: 'security',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/security_1639451781438.png',
    meta: {
      title: '安全管理',
      icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/security_1639451781438.png',
      noCache: false,
      link: null
    },
    routes: [
      {
        name: '操作日志',
        path: 'operationLog',
        hidden: false,
        component: 'Layout',
        icon: 'SettingFilled',
        meta: {
          title: '操作日志',
          icon: 'SettingFilled',
          noCache: true,
          link: null
        }
      },
      {
        name: '登录日志',
        path: 'loginLog',
        hidden: false,
        component: 'Layout',
        icon: '#',
        meta: {
          title: '登录日志',
          icon: '#',
          noCache: true,
          link: null
        }
      }
    ]
  },
  {
    name: '事件处置管理',
    path: 'eventhandling',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/eventhandling_1639451862841.png',
    meta: {
      title: '事件处置管理',
      icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/eventhandling_1639451862841.png',
      noCache: false,
      link: null
    },
    routes: [
      {
        name: '事件记录',
        path: 'eventrecord',
        hidden: false,
        component: 'Layout',
        icon: '#',
        meta: {
          title: '事件记录',
          icon: '#',
          noCache: true,
          link: null
        }
      },
      {
        name: '处置配置',
        path: 'configuration',
        hidden: false,
        redirect: 'noRedirect',
        component: 'ParentView',
        alwaysShow: true,
        icon: '#',
        meta: {
          title: '处置配置',
          icon: '#',
          noCache: true,
          link: null
        },
        routes: [
          {
            name: '处置配置列表',
            path: 'configurationList',
            hidden: false,
            component: '@/pages/eventhandling/Configuration/List',
            icon: '#',
            meta: {
              title: '处置配置列表',
              icon: '#',
              noCache: false,
              link: null
            }
          },
          {
            name: '新增处置配置',
            path: 'configurationAdd',
            hidden: false,
            component: '@/pages/eventhandling/Configuration/Add',
            icon: '#',
            meta: {
              title: '新增处置配置',
              icon: '#',
              noCache: false,
              link: null
            }
          }
        ]
      }
    ]
  },
  {
    name: '实名认证通行',
    path: 'auth',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/security_1639451759724.png',
    meta: {
      title: '实名认证通行',
      icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/security_1639451759724.png',
      noCache: false,
      link: null
    },
    routes: [
      {
        name: '账号及实名审核管理',
        path: 'userRegisterManage',
        hidden: false,
        component: '@/pages/auth/UserRegisterManage',
        icon: '#',
        meta: {
          title: '账号及实名审核管理',
          icon: '#',
          noCache: false,
          link: null
        }
      },
      {
        name: '信众签到-移动端',
        path: '/peopleSign',
        hidden: true,
        component: 'Layout',
        icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/icon_people_sign_1638274697873.png',
        meta: {
          title: '信众签到-移动端',
          icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/icon_people_sign_1638274697873.png',
          noCache: false,
          link: null
        }
      },
      {
        name: '已实名认证信息管理',
        path: 'realCertifyManage',
        hidden: false,
        component: '@/pages/auth/RealCertifyManage',
        icon: '#',
        meta: {
          title: '已实名认证信息管理',
          icon: '#',
          noCache: false,
          link: null
        }
      },
      {
        name: '活动管理-移动端',
        path: '/actManager',
        hidden: true,
        component: 'Layout',
        icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/icon_act_manager_1638274813185.png',
        meta: {
          title: '活动管理-移动端',
          icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/icon_act_manager_1638274813185.png',
          noCache: false,
          link: null
        }
      },
      {
        name: '实名通行场所管理',
        path: 'realnameaccess',
        hidden: false,
        component: '@/pages/auth/Realnameaccess',
        icon: '#',
        meta: {
          title: '实名通行场所管理',
          icon: '#',
          noCache: false,
          link: null
        }
      },
      {
        name: '信息登记-移动端',
        path: '/infoRegister',
        hidden: true,
        component: 'Layout',
        icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/icon_info_register_1638274795332.png',
        meta: {
          title: '信息登记-移动端',
          icon: 'http://101.132.194.174:7830/national/file/minio/national-religion/icon_info_register_1638274795332.png',
          noCache: false,
          link: null
        }
      },
      {
        name: '场所活动预约管理',
        path: 'bookingManagement',
        hidden: false,
        component: '@/pages/auth/BookingManagement',
        icon: '#',
        meta: {
          title: '场所活动预约管理',
          icon: '#',
          noCache: false,
          link: null
        }
      },
      {
        name: '扫码信息管理',
        path: 'scancode',
        hidden: false,
        component: '@/pages/auth/Scancode',
        icon: '#',
        meta: {
          title: '扫码信息管理',
          icon: '#',
          noCache: false,
          link: null
        }
      },
      {
        name: '无智能机人员登记',
        path: 'noPhoneRegister',
        hidden: false,
        component: '@/pages/auth/NoPhoneRegister',
        icon: '#',
        meta: {
          title: '无智能机人员登记',
          icon: '#',
          noCache: false,
          link: null
        }
      }
    ]
  },
  {
    name: '场所出入管理',
    path: 'Layout',
  }
]
export {
  menuList
}
