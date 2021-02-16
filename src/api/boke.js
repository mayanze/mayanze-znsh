import request from '@/utils/request1'

export function viewQueryCount(data) {
  return request({
    url: '/sys/request-log/queryCount',
    method: 'post',
    data
  })
}
/**
 * 查询点赞统计
 * @param data
 * @returns {AxiosPromise}
 */
export function supportQueryCount(data) {
  return request({
    url: '/boke/support-log/queryCount',
    method: 'post',
    data
  })
}

export function supportSave(data) {
  return request({
    url: '/boke/support-log/saveOrUpdate',
    method: 'post',
    data
  })
}

export function queryPage(data) {
  return request({
    url: '/boke/message/queryPage',
    method: 'post',
    data
  })
}

export function save(data) {
  return request({
    url: '/boke/message/saveOrUpdate',
    method: 'post',
    data
  })
}
