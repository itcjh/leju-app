import request from '@/api/request'
//商品列表
function getGoodsList(data) {
    return request({
        url: `/api/leju/front/goods/list`,
        method: 'get',
        data: data

    })
}
// 根据商品查询明细列表
function getGoodsDetail(data) {
    return request({
        url: `/api/leju/front/goods/detailList`,
        method: 'get',
        data: data

    })

}
// 添加到购买列表
function getOrder(data) {
    return request({
        url: `/api/leju/front/goods/addOrder`,
        method: 'post',
        data: data

    })

}
// sku明细
function getSkuList(data) {
    return request({
        url: `/api/leju/front/find/goodsDetail`,
        method: 'get',
        data: data

    })

}
export default {
    getGoodsList,
    getGoodsDetail,
    getOrder
}