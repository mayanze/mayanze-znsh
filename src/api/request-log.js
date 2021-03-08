import request from '@/utils/request1'

export function queryPage(data) {
  return request({
    url: '/sys/request-log/queryPage',
    method: 'post',
    data
  })
}
