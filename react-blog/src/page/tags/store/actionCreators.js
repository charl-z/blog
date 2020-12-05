import axios from "axios/index";
import * as constant from './actionTypes'

const getTagsData = (result) => ({
  type: constant.GET_TAGS_INFO,
  tags: result.results,
  tagShow: true
})

const getTagData = (result) => ({
  type: constant.GET_TAG_INFO,
  tagId: result.id,
  tagName: result.name,
  articles: result.article, //单个tag下面所有文章集合
  tagShow: false
})

export const getTagsInfo = () => {
  return (dispatch) => {
    axios.get('/api/tag/').then((res) => { //发送异步的ajax请求，如果成功，执行then里面方法,如果失败，则执行catch里面方法
      const result = res.data
      // console.log("----", result)
      dispatch(getTagsData(result))
    }).catch(() => {
      console.log('error')
    })
  }
}

export const getTagInfo = (id) => {
  return (dispatch) => {
    axios.get('/api/tag/' + id + '/').then((res) => {
      const result = res.data
      // console.log("----", result)
      dispatch(getTagData(result))
    }).catch(() => {
      console.log('error')
    })
  }
}



