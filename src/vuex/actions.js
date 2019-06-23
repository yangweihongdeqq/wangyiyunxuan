import {SHOPLIST,ISCHANGE} from './mutationsType'

export default {
    shopList({commit,state},data){
        console.log(commit,data,'55')
        commit(SHOPLIST,data)
    },
    isChange({commit},isChange){
        commit(ISCHANGE,isChange)
    }
}