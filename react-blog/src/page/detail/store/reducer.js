import { fromJS } from 'immutable'
import * as constant from './actionTypes'

const defaultState = fromJS({
  title: '', //文章标题
  content: '',//文章正文
  author: '', 
  pub_time: '',
  category: '',
  id: '',
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constant.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content,
        category: action.category,
        author: action.author,
        pub_time: action.pub_time,
        id: action.id
      })
    default:
      return state
  }
}