import request from '@/api/request'
// 订单列表
function getOrderList(data) {
    return request({
        url: `/api/leju/front/order/list`,
        method: 'get',
        data: data
    })
}
// 添加订单
function addOrderList(data) {
    return request({
        url: `/api/leju/front/order/addOrder`,
        method: 'post',
        data: data
    })
}
// 更新订单
function updateOrder(data) {
    return request({
        url: `/api/leju/front/order/updateOrder`,
        method: 'post',
        data: data
    })
}
// 退货
function backOrder(data) {
    return request({
        url: `/api/leju/front/order/backOrder`,
        method: 'get',
        data: data
    })
}
// 完成付款
function payDone(data) {
    return request({
        url: `/api/leju/front/order/payDone`,
        method: 'get',
        data: data
    })
}
// 确认收货
function allDone(data) {
    return request({
        url: `/api/leju/front/order/allDone`,
        method: 'get',
        data: data
    })
}


export default {
    getOrderList,
    addOrderList,
    updateOrder,
    backOrder,
    payDone,
    allDone
}