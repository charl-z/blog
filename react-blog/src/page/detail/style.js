
import styled from 'styled-components';

export const MarkDown = styled.div`
pre {
    display: block;
    padding: 10px;
    margin: 0 0 10px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #abb2bf;
    background: #282c34;
    word-break: break-all;
    word-wrap: break-word;
    overflow: auto;
}
h1,h2,h3,h4,h5,h6{
    // margin-top: 1em;
    font-size: 16px;
    line-height: 1.285714285714286em;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 30px;
    /* margin-bottom: 1em; */
}
h1::after {
  display: block;
  content: " ";
  margin-top: 10px;
  width: 30px;
  border-bottom: 3px solid rgba(235,35,68,1);
}
h2::after {
  display: block;
  content: " ";
  margin-top: 10px;
  width: 40px;
  border-bottom: 3px solid rgba(235,35,68,1);
}
h3::after {
  display: block;
  content: " ";
  margin-top: 10px;
  width: 50px;
  border-bottom: 3px solid rgba(235,35,68,1);
}
h5::after {
  display: block;
  content: " ";
  margin-top: 10px;
  width: 60px;
  border-bottom: 3px solid rgba(235,35,68,1);
}
h6::after {
  display: block;
  content: " ";
  margin-top: 10px;
  width: 60px;
  border-bottom: 3px solid rgba(235,35,68,1);
}

strong {
    font-weight: bold;
}
.content{
    padding-top: 0px;
}

p img{
    /* 图片居中 */
    margin: 0 auto;
    display: flex;
}

table {
    border: 1px solid #ddd;
    width: 100%;
}

td,th{
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
    border: 1px solid #ddd;
}
`
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
    padding-top: 10px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
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
    margin-top: 20px;
    margin-bottom: 80px;
    padding: 0;
    }
  label{
  text-align:center;
  margin-left:auto;
  margin-right:auto;
  }
`

export const Loading = styled.div`
  text-align: center;
  // background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`