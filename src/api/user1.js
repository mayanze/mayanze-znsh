import request from '@/utils/request1'

export function queryPage(data) {
  return request({
    url: '/sys/user/queryPage',
    method: 'post',
    data
  })
}
