import { queryRooms } from '../services/roomsBiling'
import { Toast } from 'antd-mobile'

export default {

  namespace: 'roomsBiling',

  state: {
    roomsList: [],
    idCard: '',
    name: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetchQuery({ payload }, { call, put }) {  // eslint-disable-line
      console.log(payload, 'model');
      const result = yield call(queryRooms, payload);
      console.log(result, 'result');
      if (result.success) {
        Toast.success('请求成功', 1)
        yield put({ type: 'queryList', payload: result.payload });
      } else {
        Toast.fail('请求失败')
      }
    },
  },

  reducers: {
    queryList(state, action) {
      return { 
        ...state, 
        roomsList: action.payload.htList,
        idCard: action.payload.zjhm,
        name: action.payload.xm
      };
    },
  },

};
