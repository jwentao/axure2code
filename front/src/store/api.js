import ajax from 'axios';
import iView from 'iview';

const urlPrefix = '/admin';

ajax.interceptors.request.use(c => {
  c.headers['requested-with'] = 'XMLHttpRequest';
  return c;
});

ajax.interceptors.response.use(c => {
  if (c.data.errno === 699) {
    window.location.href = c.data.data.redirect;
  }

  if (c.data.errno !== 0 && c.data.errno) {
    let msg = c.data.errmsg || '发生错误，请联系管理员';
    iView.Message.error(msg);
  }

  return c;
}, c => {
});

// import testNationData from '../testData/nation';
//
// const nationPromise = new Promise((resolve, reject) => {
//   resolve(testNationData);
// });

export default {
  getHtml (url, data) {
    return ajax({
      url,
      params: data
    });
  },
  // 获取枚举(系统配置)
  getEnums (data) {
    return ajax({
      url: '/admin/sys/enums',
      params: data
    });
  },
  // 获取用户信息
  getRole (data) {
    return ajax({
      url: '/admin/sys/getRole',
      params: data
    });
  },
  // 获取用户信息
  getInfo (data) {
    return ajax({
      url: 'admin/sys/info',
      params: data
    });
  },
  // 获取用户信息
  modifyRole (data) {
    return ajax({
      url: '/admin/sys/modifyRole',
      params: data
    });
  },
  // 发起对账
  initiateProcess (data) {
    return ajax({
      url: '/admin/cdnAccountBill/initiateProcess',
      method: 'POST',
      data
    });
  },
  // 查看对账流程
  getProcessApprovalStatus (data) {
    return ajax({
      url: '/admin/cdnAccountBill/getProcessApprovalStatus',
      params: data
    });
  },
  // 查看账单列表
  queryAccountBill (data) {
    return ajax({
      url: '/admin/cdnAccountBill/queryAccountBill',
      params: data
    });
  },
  // 添加账单
  addBill (data) {
    return ajax({
      url: '/admin/cdnAccountBill/addBill',
      method: 'POST',
      data
    });
  },
  // 导出套餐
  exportAccount (params) {
    return ajax({
      url: `${urlPrefix}/cdnAccountBill/down`,
      responseType: 'blob',
      header: {
        responseType: 'blob'
      },
      params
    });
  },
  // 账单更新
  updateBill (data) {
    return ajax({
      url: '/admin/cdnAccountBill/updateBill',
      method: 'POST',
      data
    });
  },
  // 获取最高监控流量
  getMonitorFlow (data) {
    return ajax({
      url: '/admin/cdnAccountBill/getMonitorFlow',
      params: data
    });
  },
  // 发起审批
  changeProcessApproval (data) {
    return ajax({
      url: '/admin/cdnAccountBill/changeProcessApproval',
      method: 'POST',
      data
    });
  },
  // 审批
  approval (data) {
    return ajax({
      url: '/admin/cdnAccountBill/approval',
      method: 'POST',
      data
    });
  },
  // 批量审批
  batchApprovals (data) {
    return ajax({
      url: '/admin/cdnAccountBill/batchApprovals',
      method: 'POST',
      data
    });
  },
  // 撤销审批
  cancelApprovals (data) {
    return ajax({
      url: '/admin/cdnAccountBill/cancelApprovals',
      method: 'POST',
      data
    });
  },
  // 修改拟结算流量
  updatePreSettlementFlow (data) {
    return ajax({
      url: '/admin/cdnAccountBill/updatePreSettlementFlow',
      method: 'POST',
      data
    });
  },
  // 获取账单详情
  getAccountBill (data) {
    return ajax({
      url: '/admin/cdnAccountBill/getAccountBill',
      params: data
    });
  },
  // 获取账单详情-明细数据
  getAccountBillDetails (data) {
    return ajax({
      url: '/admin/cdnAccountBill/getAccountBillDetails',
      params: data
    });
  },
  // 获取账单详情-变更记录
  getChangeLogs (data) {
    return ajax({
      url: '/admin/cdnAccountBill/getChangeLogs',
      params: data
    });
  },
  // 根据日期和厂商获取带宽包
  getRelatedJoinedBandwidthList (data) {
    return ajax({
      url: '/admin/sharedBandwidthPayStat/relatedJoinedBandwidthList',
      params: data
    });
  },
  // 获取普通95付费的带宽概览
  getNormalPay95Overview (data) {
    return ajax({
      url: '/admin/sharedBandwidthPayStat/normalPay95Overview',
      params: data
    });
  },
  // 获取 增强型95 付费的带宽预览
  getEnhancePay95Overview (data) {
    return ajax({
      url: '/admin/sharedBandwidthPayStat/enhancePay95Overview',
      params: data
    });
  },
  // 获取带宽详情列表
  getListStatedBps (data) {
    return ajax({
      url: '/admin/sharedBandwidthPayStat/listStatedBps',
      params: data
    });
  },
  // 获取人员角色
  queryRoles (data) {
    return ajax({
      url: '/admin/sys/queryRoles',
      params: data
    });
  },
  // 修改人员角色
  batchAddRoles (data) {
    return ajax({
      url: '/admin/sys/batchAddRoles',
      params: data
    });
  },
  postAccount (data) {
    return ajax({
      url: `${urlPrefix}/cdnAccountBill/test`,
      method: 'POST',
      data
    });
  },
  getPublicMenu () {
    return ajax({
      url: 'https://static-jw.msstatic.com/project/info.json'
    });
  }
};
