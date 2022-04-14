import http from '../utils/http'

export function queryRooms(payload) {
  return http.post('/my/iifstrl/apis/iifs-bris/route/jsotnb/queryHtInfoProcess', payload);
}

export function queryBillingList(payload) {
  return http.post('/my/iifstrl/apis/iifs-bris/route/jsotnb/queryPlanProcess', payload);
}

export function getPayCode(payload) {
  return http.post('/my/iifstrl/apis/iifs-bris/route/jsotnb/jsotnbDirectPayProcess', payload);
}
