import axios from "axios/index";
import * as constant from './actionTypes'


const getDetail = (result) => ({
  type: constant.GET_DETAIL,
  content: result.results,
})

export const getAboutDetail = () => {
  return (dispatch) => {
    axios.get('/api/about/').then((res) => { 
      const result = res.data
      dispatch(getDetail(result))
    }).catch(() => {
      console.log('error')
    })
  }
}