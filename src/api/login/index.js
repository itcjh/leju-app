import request from '@/api/request'
// 注册
function register(data) {
    return request({
        url: `/api/leju/front/user/register`,
        method: 'post',
        data: data

    })

}
// 登录
function login(data) {
    return request({
        url: `/api/leju/front/user/doLogin`,
        method: 'post',
        data: data

    })

}
// 更新用户名
function updateUser(data) {
    return request({
        url: `/api/leju/front/user/update`,
        method: 'post',
        data: data

    })

}
// 退出登录
function outLogin(data) {
    return request({
        url: `/api/leju/front/user/doLogout`,
        method: 'get',
        data: data

    })

}

export default {
    register,
    login,
    updateUser,
    outLogin
}