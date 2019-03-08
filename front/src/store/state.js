import navType from '../common/navType';

export default {
  userInfo: {},
  // 枚举
  accelerateTypeEnums: {},
  accountBillTypeEnums: {},
  approvalStatusEnums: {},
  roleTypeEnums: {},
  vendorEnums: {},
  sharedBandwidthVendorEnums: {},
  curRole: '',
  navData: [
    {
      id: 'monthlyAccountInfo',
      title: '月度对账信息',
      type: navType.SUB_MENU,
      icon: 'ios-ionic-outline',
      children: [
      // {
      //   id: 'idcAccount',
      //   title: 'IDC对账',
      //   type: navType.MENU_ITEM,
      //   icon: 'ios-ionic-outline'
      // },
      {
        id: 'cdnAccount',
        title: 'CDN对账',
        type: navType.MENU_ITEM,
        icon: 'ios-analytics'
      }]
    },
    {
      id: 'sharedBandwidthPacket',
      title: '共享带宽包',
      type: navType.SUB_MENU,
      icon: 'ios-ionic-outline',
      children: [
        {
          id: 'bandwidthOverview',
          title: '带宽总览',
          type: navType.MENU_ITEM,
          icon: 'ios-analytics'
        },
        {
          id: 'bandwidthDataDetail',
          title: '带宽详情',
          type: navType.MENU_ITEM,
          icon: 'ios-analytics'
        }
        ]
    },
    {
      id: 'roleManager',
      title: '角色管理',
      type: navType.MENU_ITEM,
      icon: 'ios-ionic-outline'
    }
  ]
};
