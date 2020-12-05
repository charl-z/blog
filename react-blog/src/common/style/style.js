import styled from 'styled-components';

export const ArticleWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  .archive{
    font-size: 16px;
    line-height: 24px;
    padding-top: 20px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    border-top: 1px solid rgba(0,0,0,0.1);
  }
  .content{
    background-color: #fff;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 40px;
    padding-right: 40px;
    border-left: 1px solid rgba(0,0,0,0.1);
    border-right: 1px solid rgba(0,0,0,0.1);
  }
  h2::after{
    display: block;
    content: " ";
    margin-top: 10px;
    width: 40px;
    border-bottom: 3px solid rgba(235,35,68,1);
// border-bottom: 3px solid rgba(0,0,0,0.2);
    }
 .navigation {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0;
    }
  .nextpage{
    margin-right: 50px;
  }

  label{
  text-align:center;
  margin-left:auto;
  margin-right:auto;
  }
  .page{
    text-align: center;
  }
`

export const LatestArticles = styled.h2`
  font-size: 20px;
  line-height: 1.285714285714286em;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 15px;
  a{
    color: #4b505a;
    text-decoration: None;
    }
`
export const ArticlesList = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  dt{
    float: left;
    width: 160px;
    overflow: hidden;
    clear: left;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
  dd{
    margin-left: 180px;
    }
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 145px;
  width: 60px;
  height: 60px;
`


