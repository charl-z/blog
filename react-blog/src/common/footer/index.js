import React, { Component} from 'react'
import { FooterContainer, FooterTitle} from './style'

class Footer extends Component{
  render(){
    return(
      <FooterContainer>
        <div className='container footer-container'>
          <div className='row'>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <FooterTitle>Sitemap</FooterTitle>
              <ul className='list-unstyled'>
                <li>
                  <a href='/category'>分类</a>
                </li>
                <li>
                  <a href='/tag'>标签</a>
                </li>
                <li>
                  <a href='/about'>关于</a>
                </li>
                {/* <li>
                  <a href='/'>RSS</a>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className='text-center'>
                <FooterTitle>SOCIAL</FooterTitle>
                <ul className='list-unstyled'>
                  <li>
                    <a href='https://github.com/weidengyi' target='_blank' rel="noopener noreferrer">GitHub</a>
                  </li>
                  <li>
                    <a href='/'>微博</a>
                  </li>
                  <li>
                    <a href='/'>知乎</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className='pull-right '>
                <FooterTitle>Links</FooterTitle>
                <ul className='list-unstyled'>
                  <li>
                    <a href='https://www.python.org/' target='_blank' rel="noopener noreferrer">python.org</a>
                  </li>
                  <li>
                    <a href='https://foofish.net' target='_blank' rel="noopener noreferrer">Python之禅</a>
                  </li>
                  <li>
                    <a href='https://www.lylinux.net/' target='_blank' rel="noopener noreferrer">且听风吟</a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <div><a href='http://www.beian.miit.gov.cn/' target='_blank' rel="noopener noreferrer">鄂ICP备17030794号</a></div>
        </div>
      </FooterContainer>
    )
  }
}

export default Footer