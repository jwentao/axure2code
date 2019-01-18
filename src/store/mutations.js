import gtagPageView from '../common/gtagPageView';
export default {
  setUserInfo (state, list) {
    gtagPageView(list.passport);
    state.userInfo = list;
  },
  setEnumsList (state, list) {
    state.accelerateTypeEnums = list.accelerateType;
    state.accountBillTypeEnums = list.accountBillType;
    state.approvalStatusEnums = list.approvalStatus;
    state.roleTypeEnums = list.roleType;
    state.vendorEnums = list.vendor;
    state.sharedBandwidthVendorEnums = list.sharedBandwidthVendor;
  },
  setRole (state, list) {
    state.curRole = list.role;
  },
  setAdminSee (state, indexList) {
    // indexList.forEach(item => {
    //   state.navData[item].hide = false;
    // })
    state.navData.forEach(item => {
      if (item.hide === true) {
        item.hide = false;
      }
      if (item.children) {
        item.children.forEach(child => {
          if (child.hide === true) {
            child.hide = false;
          }
        });
      }
    });
  }
};
