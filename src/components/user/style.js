import styled from 'styled-components'

export const UserHeader = styled.div`
  display:flex;
  align-items:center;
  padding:24px;
  border-bottom:1px solid #e8e8e8;
  background:#fff;
  .avator{
    width:100px;
    height:100px;
    border-radius:50%;
    overflow:hidden;
    margin-right:24px;
  }
  .userinfo{
    flex:1;
  }
  .username{
    margin-right:24px;
    font-size:24px;
    font-weight:bold;
    color:#333;
  }
  .info{
    display:flex;
    align-items:center;
  }
  .tag{
    display:inline-block;
    padding:0 12px;
    font-size:12px;
    line-height:2;
    color:rgba(77,182,172,1);
    background:rgba(77,182,172,.2);
    border-radius:4px;
    font-style:normal;
  }
  .company{
    padding-top:16px;
    font-size:16px;
    color:#666;
  }
`;

export const UserInfo = styled.div`
  padding:24px;
  background:#fff;

  .title{
    padding-bottom:12px;
    font-size:16px;
    color:#333;
  }
  .summary{
    font-size:14px;
    color:#666;
  }
`;

export const Button = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  height:36px;
  margin:24px 24px 0;
  border-radius:5px;
  border:none;
  box-shadow:0 2px 6px 2px rgba(0,0,0,.2);
  outline:none;
  color:#fff;
  background:#4db6ac;
  &:hover{
    background:#009688;
  }
  &:active{
    background:#00796b;
  }
  cursor:pointer;
  user-select:none;
`