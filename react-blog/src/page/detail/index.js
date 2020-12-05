import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import marked from 'marked';
import hljs from 'highlight.js';
import { connect } from "react-redux";
import { MarkDown, ArticleWrapper } from './style'
import { actionCreators } from './store'
import { BackTop } from 'antd';
import { GlobalIcon } from '../../static/iconfont/iconfont'

class Detail extends Component{
    render(){
      const { content, title } = this.props
      document.title = title + " | WADEDY-PYTHON"
      return(
        <ArticleWrapper>
          <GlobalIcon />
          <div className='container archive content'>
              <MarkDown>
                <div
                  dangerouslySetInnerHTML={{
                  __html:  marked(content) ,
                  }}
                />
              </MarkDown>
          </div>
          <BackTop visibilityHeight='400'>
            <i className="iconfont">&#xe613;</i>
          </BackTop>

        </ArticleWrapper>
        )
    }
    componentDidMount(){
      this.props.getDetail(this.props.match.params.id)
        }


    componentWillMount() {
        // marked相关配置
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            },
        });
    }
}


const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
  })
  
const mapDispatch = (dispatch) =>({
    getDetail(id){
      dispatch(actionCreators.getDetail(id))
    },
  })
  

export default connect(mapState, mapDispatch)(withRouter(Detail))
