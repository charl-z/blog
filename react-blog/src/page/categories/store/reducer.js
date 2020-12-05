import { fromJS } from 'immutable'
import * as constant from './actionTypes'


const defaultState = fromJS({
    id: '',  //单个分类数据id
    title: '', //单个分类title
    articles: [], //单个分类里面所有文章title集合
    categories: [],  //分类集合
    categoryShow: false
})

function getCategoriesInfo(state, action){ 
  return state.merge({
    'categories': action.categories,
    'categoryShow': action.categoryShow
  })
}

function getCategoryInfo(state, action){ 
  return state.merge({
    'id': action.id,
    'title': action.title,
    'articles': action.articles,
    'categoryShow': action.categoryShow
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constant.GET_CATEGORIES_INFO:
      return getCategoriesInfo(state, action)
    case constant.GET_CATEGORY_INFO:
      return getCategoryInfo(state, action)
    default:
      return state
  }
}