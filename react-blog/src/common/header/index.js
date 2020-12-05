import React, { Component, Fragment} from 'react'
import { HeaderContainer, HeadNav, HeaderLogo, HeaderContent, HeaderUnderline } from './style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component{
  render(){
    const { title, category, author, pub_time, categoryId, categoryShow, categoryTitle, tagShow, tagName } = this.props
    let tmpTitle
    if(title){
      tmpTitle = (
        <Fragment>
          <h1 className='header-title'>{ title }</h1>
          <p className="header-date">
            作者：{ author }，{ pub_time.split("T")[0] }，分类：
            <Link key={ categoryId } to={'/category/' + categoryId}>
              { category }
            </Link>
          </p>
          <HeaderUnderline></HeaderUnderline>
        </Fragment>
      )
    }
    else if(categoryTitle){
      tmpTitle = (
        <Fragment>
          <h1 className='header-title'>分类：{ categoryTitle }</h1>
          <HeaderUnderline></HeaderUnderline>
          <p className='header-subtitle-homepage header-subtitle'>
            分类归档 "{categoryTitle}"
          </p>
        </Fragment>
      )
    }
    else if(categoryShow){
      tmpTitle = (
        <Fragment>
          <h1 className='header-title'>分类</h1>
          <HeaderUnderline></HeaderUnderline>
          <p className='header-subtitle-homepage header-subtitle'>
            所有分类都在这里
          </p>
        </Fragment>
      )
    }
    else if(tagShow){
      tmpTitle = (
        <Fragment>
          <h1 className='header-title'>标签</h1>
          <HeaderUnderline></HeaderUnderline>
          <p className='header-subtitle-homepage header-subtitle'>
            所有标签都在这里
          </p>
        </Fragment>
      )
    }
    else if(tagName){
      tmpTitle = (
        <Fragment>
          <h1 className='header-title'>标签：{ tagName }</h1>
          <HeaderUnderline></HeaderUnderline>
          <p className='header-subtitle-homepage header-subtitle'>
            分类归档 #{tagName}
          </p>
        </Fragment>
      )
    }
    else{
      tmpTitle = (
        <Fragment>
          <h1 className='header-title'>WADEDY-PYTHON</h1>
          <HeaderUnderline></HeaderUnderline>
          <p className='header-subtitle-homepage header-subtitle'>
            凡心所向，素履所往。生如逆旅，一苇以航
          </p>
        </Fragment>
      )
    }
    return(
      <HeaderContainer>
        <div className='container' >
          <HeadNav>
            <HeaderLogo>
              <a className='pull-left' href='/'>
                WADEDY-Python
              </a>
            </HeaderLogo>
            <div className='nav pull-right' >
              <a href='/'>首页</a>
              <a href='/category'>分类</a>
              <a href='/tag'>标签</a>
              <a href='/about'>关于</a>
            </div>
          </HeadNav>
        </div>
        <div className='container header-wrapper'>
          <div className='col-lg-12'>
            <HeaderContent>
              { tmpTitle }
            </HeaderContent>
          </div>
        </div>
      </HeaderContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    title: state.getIn(['detail', 'title']),
    category: state.getIn(['detail', 'category']),
    author: state.getIn(['detail', 'author']),
    pub_time: state.getIn(['detail', 'pub_time']),
    categoryId: state.getIn(['detail', 'id']),

    categoryShow: state.getIn(['categories', 'categoryShow']),
    categoryTitle: state.getIn(['categories', 'title']),

    tagShow: state.getIn(['tags', 'tagShow']),
    tagName: state.getIn(['tags', 'tagName']),
  }
}

export default connect(mapStateToProps, null)(Header)