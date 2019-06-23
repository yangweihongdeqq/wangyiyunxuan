import { SHOPLIST ,ISCHANGE} from './mutationsType'

export default{
    [SHOPLIST](state, data){
        state.shopList = data
    },
    [ISCHANGE](state,isChange){
        state.isChange = isChange
    }
}