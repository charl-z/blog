import { fromJS } from 'immutable'
import * as constant from './actionTypes'

const defaultState = fromJS({
  tags: [],
  tagShow: false,
  tagId: '',
  tagName: '',
  articles: [] //单个tag下面所有文章集合
})

function getTagsInfo(state, action){
  return state.merge({
    'tags': action.tags,
    'tagShow': action.tagShow,
  })
}

function getTagInfo(state, action){
  return state.merge({
    'tagShow': action.tagShow,
    'tagId': action.tagId,
    'tagName': action.tagName,
    'articles': action.articles
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constant.GET_TAGS_INFO:
      return getTagsInfo(state, action)
    case constant.GET_TAG_INFO:
      return getTagInfo(state, action)
    default:
      return state
  }
}