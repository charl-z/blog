import { fromJS } from 'immutable'
import * as constant from './actionTypes'

const defaultState = fromJS({
  content: '',//文章正文
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constant.GET_DETAIL:
      return state.merge({
        content: action.content,
      })
    default:
      return state
  }
}