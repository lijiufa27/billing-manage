import http from '../utils/http'

export function queryRooms(payload) {
  return http.post('/my/apis/iifs-bris/routejsotnb/queryHtInfoProcess', payload);
}

export function queryBillingList(payload) {
  return http.post('/my/apis/iifs-bris/route/jsotnb/queryPlanProcess', payload);
}

export function pay(payload) {
  return http.post('/my/apis/iifs-bris/route/jsotnb/jsotnbDirectPayProcess', payload);
}
