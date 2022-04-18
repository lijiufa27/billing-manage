import { queryRooms, queryBillingList, getPayCode  } from '../services/roomsBiling'
import moment from 'moment'
import { Toast } from 'antd-mobile'

export default {

  namespace: 'roomsBiling',

  state: {
    roomsList: [],
    idCard: '',
    name: '',
    unpayBillingList: [],
    finishPayBillingList: [],
    payCode: '',
    mainType: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetchQuery({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield call(queryRooms, payload);
      if (result.success) {
        Toast.success('请求成功', 1)
        yield put({ type: 'queryList', payload: result.payload });
      } else {
        Toast.fail(result.responseMessage)
      }
    },
    *fetchBillingList({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield call(queryBillingList, payload);
      if (result.success) {
        Toast.success('请求成功', 1)
        yield put({ type: 'queryBillingList', payload: result.payload });
      } else {
        Toast.fail(result.responseMessage)
      }
    },
    *fetchPayCode({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield call(getPayCode, payload);
      if (result.success) {
        Toast.success('请求成功', 1)
        yield put({ type: 'queryPayCode', payload: result.payload });
      } else {
        Toast.fail(result.responseMessage)
      }
    },
  },

  reducers: {
    queryList(state, action) {
      return { 
        ...state, 
        roomsList: action.payload.htData.htList,
        idCard: action.payload.htData.zjhm,
        name: action.payload.htData.xm,
        mainType: action.payload.htData.rlx
      };
    },
    queryBillingList(state, action) {
      const unpayBillingList = action.payload.rentPlanInfoList.filter(item => item.status !== 'S')
      const finishPayBillingList = action.payload.rentPlanInfoList.filter(item => item.status === 'S')
      unpayBillingList.forEach(item => {
        item.rmk1 = moment(item.rmk1).format('YYYY年MM月DD日')
        item.rmk2 = moment(item.rmk2).format('YYYY年MM月DD日')
      });
      return { 
        ...state, 
        unpayBillingList,
        finishPayBillingList
      };
    },
    queryPayCode(state, action) {
      return { 
        ...state,
        payCode: action.payload.idIdNo
      };
    },
  },

};
