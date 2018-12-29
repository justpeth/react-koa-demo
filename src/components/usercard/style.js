import styled from 'styled-components';

export const UserList = styled.div`
  padding-top:24px;
  margin:0 auto;
`;
export const Card = styled.div`
  background-color:#fff;
  margin-bottom:24px;
  padding:12px 24px;
  user-select:none;
  cursor:pointer;
  .top{
    display:flex;
    align-items:center;
    border-bottom:1px solid #e8e8e8;
    .label{
      border-bottom:none;
    }
    h2{
      color:#666;
    }
  }
  .company{
    font-size:18px;
    color:#333;
  }
  .left{
    flex:1;
  }
  h2{
    font-size:20px;
    color:#333;
    line-height:40px;
  }
  .label{
    font-size:0;
    padding-bottom:12px;
    border-bottom:1px solid #e8e8e8;
    span{
      display:inline-block;
      padding:0 12px;
      font-size:12px;
      line-height:2;
      color:rgba(77,182,172,1);
      background:rgba(77,182,172,.2);
      border-radius:4px;
    }
  }
  .desc{
    padding-top:12px;
    color:#999;
    line-height:1.5;
  }
  .desc-tit{
    color:#666;
    font-size:14px;
  }
`;