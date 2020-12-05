import React, { Component, Fragment } from 'react'
import { ArticleWrapper, LatestArticles, ArticlesList } from '../../common/style/style'
import { Container} from 'react-bootstrap'
import {connect} from "react-redux";
import { actionCreators } from './store';
import { Link } from 'react-router-dom'
import { GlobalIcon } from '../../static/iconfont/iconfont'
import 'antd/dist/antd.css';
import { BackTop } from 'antd';

class Categories extends Component{
    render(){
      // console.log("Categories Component")
      let tmpCategory
      if(this.props.match.params.id){
        const { id, title, articles } = this.props
        document.title = title + " | WADEDY-PYTHON"
        // console.log("category:", category)
        tmpCategory = (
          <Fragment>
            <LatestArticles>
              <Link key={id} to={'/category/' + id}>
               {title}
              </Link>
             </LatestArticles>
             {
              articles.map( (article, article_index) => (
                <ArticlesList key={article_index} className='dl-horizontal'>
                <dt>{ article.pub_time.split("T")[0] }</dt>
                <Link key={article_index} to={'/article/' + article.id}>
                  <dd>{ article.title }</dd>
                </Link>
              </ArticlesList>
               ))
             }
          </Fragment>)
      }
      else{
        const { categories } = this.props
        document.title = "分类 | WADEDY-PYTHON"
        // console.log("----categories---:", categories)
        tmpCategory = (
          <Fragment>
          {
            categories.map( (item, index) => {
              return(
                <div key={index}>
                  <LatestArticles>
                    <Link key={index} to={'/category/' + item.id}>
                      {item.name}
                    </Link>
                  </LatestArticles>
                  {
                    item.article.map( (article, article_index) => (
                      <ArticlesList key={article_index} className='dl-horizontal'>
                        <dt>{ article.pub_time.split("T")[0] }</dt>
                        <Link key={article_index} to={'/article/' + article.id}>
                          <dd>{ article.title }</dd>
                        </Link>
                      </ArticlesList>
                    ))
                  }
                </div>
              )
            })
          }
        </Fragment>
        )
      }
      return(
        <ArticleWrapper>
             <GlobalIcon />
              <Container className='archive content'>
              { tmpCategory }
              </Container>
              <BackTop visibilityHeight='400'>
                <i className="iconfont">&#xe613;</i>
              </BackTop>
        </ArticleWrapper>
      )
      }
      
  componentDidMount(){
     if(this.props.match.params.id){
       // console.log("this.props.getCategoryInfo(this.props.match.params.id)")
       this.props.getCategoryInfo(this.props.match.params.id)
     }
     else{
      // console.log("this.props.getCategoriesInfo()")
      this.props.getCategoriesInfo()
     }
  }
}


const mapState = (state) => ({
  categories: state.getIn(['categories', 'categories']),
  id: state.getIn(['categories', 'id']),
  title: state.getIn(['categories', 'title']),
  articles: state.getIn(['categories', 'articles']),
})

const mapDispatch = (dispatch) =>({
  getCategoriesInfo(){
    dispatch(actionCreators.getCategoriesInfo())
  },
  getCategoryInfo(id){
    dispatch(actionCreators.getCategoryInfo(id))
  }
})


export default connect(mapState, mapDispatch)(Categories)
