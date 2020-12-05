import axios from "axios/index";
import * as constant from './actionTypes'

const getCategoriesData = (result) => ({
  type: constant.GET_CATEGORIES_INFO,
  categories: result.results,
  categoryShow: true
})

const getCategoryData = (result) => ({
  type: constant.GET_CATEGORY_INFO,
  id: result.id,
  title: result.name,
  articles: result.article,
  categoryShow: false
})


export const getCategoriesInfo = () => {
  return (dispatch) => {
    axios.get('/api/category/').then((res) => { //发送异步的ajax请求，如果成功，执行then里面方法,如果失败，则执行catch里面方法
      const result = res.data
      // console.log("----", result)
      dispatch(getCategoriesData(result))
    }).catch(() => {
      console.log('error')
    })
  }
}

export const getCategoryInfo = (id) => {
  return (dispatch) => {
    axios.get('/api/category/' + id + '/').then((res) => { //发送异步的ajax请求，如果成功，执行then里面方法,如果失败，则执行catch里面方法
      // console.log("----", res)
      const result = res.data
      // console.log("----", result)
      dispatch(getCategoryData(result))
    }).catch(() => {
      console.log('error')
    })
  }
}



