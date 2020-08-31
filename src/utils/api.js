import axios from './fetch'
export default function fetchGetusers(params){
    return axios({
        url:'/api/v1/users/all',
        method:'GET',
        params
    })
}