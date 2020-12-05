import React, { Component, Fragment} from 'react'
import { ArticleWrapper, LatestArticles, ArticlesList } from '../../common/style/style'
import { TagCloud } from './style'
import {actionCreators} from "../tags/store";
import {connect} from "react-redux";
import { Link } from 'react-router-dom'

class Tags extends Component{
    render(){
      let tmpTag
      if(this.props.match.params.id){
        const { tagId, tagName, articles } = this.props
        document.title = tagName + " | WADEDY-PYTHON"
        tmpTag = (
          <Fragment>
            <LatestArticles>
              <Link key={tagId} to={'/tag/' + tagId}>
                { tagName }
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
          </Fragment>
        )
      }else {
        const {tags } = this.props
        document.title = "标签页 | WADEDY-PYTHON"
        tmpTag = (
          <Fragment>
            <LatestArticles>
                  <a href="/tags">所有标签</a>
            </LatestArticles>
            <ArticlesList className='dl-horizontal'>
              <TagCloud>
                {
                  tags.map((item, index) => (
                    <Fragment key={index}>
                      <Link key={index} to={'/tag/' + item.id}>
                        <li className={'tag-' + Math.floor(Math.random() * (5))}>
                          {item.name}
                        </li>
                      </Link>
                    </Fragment>
                  ))
                }  
              </TagCloud>
            </ArticlesList>
          </Fragment>
        )
      }

      return(
        <ArticleWrapper>
          <div className='container archive content'>
            {tmpTag}
          </div>
        </ArticleWrapper>
      )
    }

  componentDidMount(){
    if(this.props.match.params.id){
      this.props.getTagInfo(this.props.match.params.id)
    }
    else{
      this.props.getTagsInfo()
    }
  }
}

const mapState = (state) => ({
  tags: state.getIn(['tags', 'tags']),
  tagId: state.getIn(['tags', 'tagId']),
  tagName: state.getIn(['tags', 'tagName']),
  articles: state.getIn(['tags', 'articles']),
  tagShow: state.getIn(['tags', 'tagShow']),
})

const mapDispatch = (dispatch) =>({
  getTagsInfo(){
    dispatch(actionCreators.getTagsInfo())
  },
  getTagInfo(id){
    dispatch(actionCreators.getTagInfo(id))
  }
})

export default connect(mapState, mapDispatch)(Tags)