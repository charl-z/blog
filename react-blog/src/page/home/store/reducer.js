import { fromJS } from 'immutable'
// import * as constant from './actionTypes'
import * as constant from './actionTypes'
const defaultState = fromJS({
  articleList: [],
  articlePage: 1,  //当前页码
  totalPage: 1,  //总的数据数量
  pageSize: 1   //每页显示的数据数量
})

const changeHomeData = (state, action) => {
  return state.merge({
    'articleList': fromJS(action.articleList),
    'totalPage': action.totalPage,
    'pageSize': action.pageSize
  })
}

function getPageList(state, action){ //与箭头函数不同的写法
  return state.merge({
    'articleList': action.articleList,
    'articlePage': action.page,
  })
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case constant.CHANGE_HOME_DATA:
      //由于action.topicList是个mutable(可变的对象)，而topicList是个不可变的对象，因此要进行类型变换。
      //只有将defaultState类型变为immutable(不可变对象)才能用set的方法
      return changeHomeData(state, action)
    case constant.GET_PAGE_INFO:
      return getPageList(state, action)
    // case constant.TOGGLE_SCROLL_TOP_SHOW:
    //   return state.set('showScroll', action.show)

    default:
      return state
  }

}