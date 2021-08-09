import { request } from './request'

export function getDetail(iid){
    return request({
        url: '/detail',
        params: iid
    })
}


/* class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

const p = new Person('why',18) */

// export class GoodsInfo{
//     constructor()
// }

// export class Goods {
//     constructor(itemInfo, columns, services){
//         this.title = itemInfo.title
//         this.desc = itemInfo.desc 
//     }
// }