import axios from "axios/index";
import * as constant from './actionTypes'

const changeDetail = (result) => ({
  type: constant.CHANGE_DETAIL,
  title: result.title,
  content: result.body,
  author: result.author.username, 
  pub_time: result.pub_time,
  category: result.category.name,
  id: result.category.id

})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get(`/api/article/${id}/`).then((res) => { //发送异步的ajax请求，如果成功，执行then里面方法,如果失败，则执行catch里面方法
      const result = res.data
      dispatch(changeDetail(result))
    }).catch(() => {
      console.log('error')
    })
  }
}