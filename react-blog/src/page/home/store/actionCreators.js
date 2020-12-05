import axios from "axios/index";
import * as constant from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: constant.CHANGE_HOME_DATA,
  articleList: result.results,
  totalPage: result.count,
  pageSize: result.page_size
})

const getPageContent = (result, page) => ({
  type: constant.GET_PAGE_INFO,
  articleList: fromJS(result.results),
  page: page,
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/article/').then((res) => { //发送异步的ajax请求，如果成功，执行then里面方法,如果失败，则执行catch里面方法
      // console.log("----", res.data)
      const result = res.data
      // console.log("----", result)
      dispatch(changeHomeData(result))
    }).catch(() => {
      console.log('error')
    })
  }
}

export const getCurrentPage = (page) => {
  //获取指定页的数据
  return (dispatch) => {
    axios.get('/api/article/?page=' + page).then((res) => {
    const result = res.data
    dispatch(getPageContent(result, page))
    }).catch(() => {
      console.log('error')
    })
  }
}




