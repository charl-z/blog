import React, { Component, Fragment} from 'react'
import { actionCreators } from './store'
import { connect } from "react-redux";
import { ArticleWrapper, LatestArticles} from '../../common/style/style'

import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

class Home extends Component{
  render(){
    const { articleList, totalPage, pageSize, page } = this.props
    return(
      <ArticleWrapper>
        <div className='container archive content'>
          <LatestArticles>
            <a href='/'>
              最新文章
            </a>
          </LatestArticles>
          <dl className='dl-horizontal'>
              {
                articleList.map((item, index) => {
                  return(
                    <Fragment key={index}>
                      <dt>{item.get('pub_time').split("T")[0]}</dt>
                      <Link key={index} to={'/article/' + item.get('id')}>
                        <dd>{item.get('title')}</dd>
                      </Link>
                    </Fragment>
                  )
                })
              }
          </dl>
        </div>
       
        <div className='container navigation'>
          <div className='page'>
          <Pagination 
            showQuickJumper  
            defaultCurrent={page} 
            total={ totalPage } 
            pageSize = { pageSize } 
            onChange={this.props.getCurrentPage} 
            />
          </div>
        </div>
      </ArticleWrapper>
    )
  }
  componentDidMount(){
    this.props.changeHomeDate()
    document.title = "首页-WADEDY-PYTHON"
    // this.bindEvents() //
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage']),
  totalPage: state.getIn(['home', 'totalPage']),
  pageSize: state.getIn(['home', 'pageSize']),
})


const mapDispatch = (dispatch) => {
  return{
    changeHomeDate(){
      dispatch(actionCreators.getHomeInfo())
    },
    getNextPage(page){
      dispatch(actionCreators.getNextPage(page))
    },
    getForwardPage(page){
      dispatch(actionCreators.getForwardPage(page))
    },
    getCurrentPage(page, size){
        dispatch(actionCreators.getCurrentPage(page))
    }
  }

}
export default connect(mapState, mapDispatch)(Home)