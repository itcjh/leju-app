import request from '@/api/request'
// 注册
function getKindsList(data) {
    return request({
        url: `/api/leju/front/kind/list`,
        method: 'get',
        data: data
    })
}


export default {
    getKindsList
}