import request from '@/api/request'
//系列列表
function getSeriesList(data) {
    return request({
        url: `/api/leju/front/find/seriesList`,
        method: 'get',
        data: data

    })

}
// 文章明细
function getarticleDetail(data) {
    return request({
        url: `/api/leju/front/find/articleDetail`,
        method: 'get',
        data: data

    })

}
// 文章列表
function getarticleList(data) {
    return request({
        url: `/api/leju/front/find/aritlceList`,
        method: 'get',
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
    getSeriesList,
    getarticleDetail,
    getarticleList,
    getSkuList
}