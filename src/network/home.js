import { request } from './request';

export function getHomeMultidata(){
    return request({
        //url: '/telecode/index'
        url: 'home/data'
    })
}