import http from '../utils/http'

const HOST = process.env.API_EVN === 'dev' ? '/my/iifstrl/apis/iifs-bris/route/jsotnb' : '/iifstrl/apis/iifs-bris/route/jsotnb'

export function queryRooms(payload) {
  return http.post(`${HOST}/queryHtInfoProcess`, payload);
}

export function queryBillingList(payload) {
  return http.post(`${HOST}/queryPlanBillProcess`, payload);
}

export function getPayCode(payload) {
  return http.post(`${HOST}/jsotnbDirectPayProcess`, payload);
}
