import React, { Component} from 'react'
import marked from 'marked';
import hljs from 'highlight.js';
import { connect } from "react-redux";
import { MarkDown, ArticleWrapper } from './style'
import { actionCreators } from './store'
import { BackTop } from 'antd';
import { GlobalIcon } from '../../static/iconfont/iconfont'


class About extends Component{
    render(){
      const { content} = this.props
      let tmpContent  = ''
      if(content[0]){
        tmpContent = content[0].content
      }

      return(
        <ArticleWrapper>
          <GlobalIcon/>
          <div className='container archive content'>
              <MarkDown>
                <div
                  dangerouslySetInnerHTML={{
                  __html:  marked(tmpContent) ,
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
      this.props.getAboutDetail()
      document.title = "关于 | WADEDY-PYTHON"
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
    content: state.getIn(['about', 'content']),
  })
  
const mapDispatch = (dispatch) =>({
    getAboutDetail(){
      dispatch(actionCreators.getAboutDetail())
    }
  })
  

export default connect(mapState, mapDispatch)(About)
