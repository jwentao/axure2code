/**
 * Created by zhengqiguang on 16/10/23.
 */

import api from './api';
// import util from './common/util';

export default {
  async getEnums ({commit}) {
    let {data} = await api.getEnums({
      enumTypes: JSON.stringify(['approvalStatus', 'accelerateType', 'accountBillType', 'vendor', 'roleType', 'billStatus', 'sharedBandwidthVendor'])
    });
    commit('setEnumsList', data.data);
  },
  async getRole ({commit}) {
    let {data} = await api.getRole();
    commit('setRole', data.data);
  },
  async getInfo ({commit}) {
    let {data} = await api.getInfo();
    commit('setUserInfo', data.data);
  }
};
