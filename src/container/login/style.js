import styled from 'styled-components';

export const LoginWrapper = styled.div`
  max-width:400px;
  margin:100px auto 8px;
  padding:24px;
  background:#fff;
  border-radius:8px;
  box-shadow:0 2px 8px 2px rgba(0,0,0,.2);
  @media screen and (max-width: 448px) {
    margin:100px 24px 8px;
  }
  .title{
    text-align:center;
  }
  .label{
    display:flex;
    margin:24px 0;
    padding:0 0 8px;
    border-bottom:1px solid #eee;
    input{
      flex:1;
      border:none;
      outline:none;
    }
  }
  .btn-wrapper{
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:24px;
    margin-bottom:12px;
    button{
      display:flex;
      align-items:center;
      justify-content:center;
      flex:1;
      height:36px;
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
    }
  }
  .txt-con{
    display:flex;
    justify-content:flex-end;
    font-size:12px;
    color:#999;
    a{
      color:#4db6ac;
      cursor:pointer;
      &:hover{
        color:#009688;
      }
      &:active{
        color:#00796b;
      }
    }
  }
`