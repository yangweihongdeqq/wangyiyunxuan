import ajax from './ajax'
const path = '/api'

//获取shopList 的接口
export const shopList = ()=> ajax('/')
export const seacher = (keywordPrefix) =>ajax(path+'/searchAutoComplete.json',{keywordPrefix})
export const HotKeyWords = ()=>ajax(path+'/init.json')
export const reqLftItem = ()=>ajax('/item')
export const reqRight = ()=>ajax('/item/detial')
// http://m.you.163.com/xhr/search/searchAutoComplete.json?csrf_token=0a53e4e466cdd15541878c1424d5a525&keywordPrefix=a