import store from '../index.js';

const baseColData = [
  // {
  //   type: 'selection',
  //   width: 60,
  //   align: 'center',
  //   fixed: 'left'
  // },
  {
    title: 'ID',
    key: 'id',
    align: 'center',
    width: 80
  },
  {
    title: '月份',
    key: '',
    align: 'center',
    width: 85,
    render (h, {row}) {
      let temp;
      if (row.date) {
        temp = row.date.split('-');
      }
      return h('span', {
        domProps: {
          innerHTML: temp ? `${temp[0]}-${temp[1]}` : ''
        }
      });
    }
  },
  {
    title: '供应商',
    key: 'vendor',
    align: 'center',
    width: 100,
    render (h, {row}) {
      return h('span', {}, store.state.vendorEnums[row.vendor] || row.vendor || '无');
    }
  },
  {
    title: '加速类型',
    key: 'accelerateType',
    align: 'center',
    width: 100,
    render (h, {row}) {
      return h('span', {
        domProps: {
          innerHTML: row.accelerateType && row.accelerateType.split(',').map(item => store.state.accelerateTypeEnums[item] || item).join('<br/>' || '暂无')
        }
      });
    }
  },
  {
    title: '采购带宽(M)',
    key: 'purchaseBandwidth',
    align: 'center',
    width: 150
  },
  {
    title: '运维监控最高流量(M)',
    key: 'monitorFlow',
    align: 'center',
    width: 200
  },
  {
    title: '修正后流量(M)',
    key: 'correctFlow',
    align: 'center',
    width: 150
  },
  {
    title: '乙方流量(M)',
    key: 'vendorFlow',
    align: 'center',
    width: 150
  },
  {
    title: '偏差值(M)',
    key: 'deviationValue',
    align: 'center',
    width: 110
  },
  {
    title: '偏差率(%)',
    key: 'deviationRatio',
    align: 'center',
    width: 100
  },
  {
    title: '拟结算流量(M)',
    key: 'preSettlementFlow',
    align: 'center',
    width: 150
  },
  {
    title: '结算条款',
    key: 'settlementTerm',
    align: 'center',
    width: 140
  },
  {
    title: '最小结算单位',
    key: 'minSettlementUnit',
    align: 'center',
    width: 110
  },
  {
    title: '汇聚/分类型',
    key: 'chargeType',
    align: 'center',
    width: 110,
    render (h, {row}) {
      return h('span', {}, store.state.accountBillTypeEnums[row.chargeType] || row.chargeType || '无');
    }
  }
];

export { baseColData };
