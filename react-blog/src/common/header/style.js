import styled from 'styled-components';
import backGround1 from '../../static/background/bk1.jpg'
import backGround2 from '../../static/background/bk2.jpg'
import backGround3 from '../../static/background/bk3.jpg'
import backGround4 from '../../static/background/bk4.jpg'
import backGround5 from '../../static/background/bk5.jpg'
import backGround6 from '../../static/background/bk6.jpg'
import backGround7 from '../../static/background/bk7.jpg'
// import backGround8 from '../../static/background/bk8.jpg'

let backGround;
switch(new Date().getDay()) {
  case 1:
    backGround = backGround1
    break;
  case 2:
    backGround = backGround2
    break;
  case 3:
    backGround = backGround3
      break;
  case 4:
    backGround = backGround4
    break;
  case 5:
    backGround = backGround5
    break
  case 6:
    backGround = backGround6
    break
  default:
    backGround = backGround7
}

export const HeaderContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${backGround});
  // background-size: cover;
  // background-position: center;
  min-height: 360px;
  padding: 0;
  // a:hover{
  //   opacity: 1;
  //   background-color: rgba(0,0,0,0.2);
  // }
  .header-wrapper{
    padding-left: 40px;
    padding-right: 40px;
  }
`

export const HeaderDate = styled.div`
  margin-top: 15px;
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
  a{
    color: #fff;
    text-decoration: underline;
  }
`

export const HeadNav = styled.div`
  height: 100px;
  line-height: 100px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  .nav{
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #fff;
    padding: 8px;
    margin-left: 20px;
    text-transform: uppercase;
    transition: all 0.2s ease-out;
  }
`
export const  HeaderLogo = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  // float: left;
  a{
    color: #fff;
    text-decoration: none;
  }
`
export const HeaderContent = styled.div`
  text-align: center;
  padding: 25px 0 55px 0;
  .header-title {
    font-size: 28px;
    color: #fff;
    font-weight: 700;
    }
  .header-subtitle-homepage {
    text-align: center;
    font-style: italic;
      }
  .header-subtitle {
    font-size: 14px;
    line-height: 24px;
    color: #fff;
    font-weight: 300;
    // text-align: justify;
      }
   .header-date {
    margin-top: 15px;
    font-size: 14px;
    color: #fff;
    opacity: 0.8;
    }
  p{
    margin: 0 0 10px;
    }
  h1{
    margin-top: 20px;
    margin-bottom: 10px;
    }
  a{
  color: #fff;
  text-decoration: underline;
  }
`

export const  HeaderUnderline = styled.div`
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 80px;
  border-bottom: 3px solid #eb2344;
`