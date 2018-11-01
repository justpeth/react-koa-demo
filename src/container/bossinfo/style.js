import styled from 'styled-components';

export const InfoHeader = styled.div`
  height:44px;
  background:#4db6ac;
  color:#fff;
  text-align: center;
  line-height:44px;
  box-shadow:0 2px 6px 2px rgba(0,0,0,.2);
`;

export const InfoWrapper = styled.div`
  padding: 0 32px;
  background:#fff;

  .input-list{
    display:flex;
    margin-bottom:12px;
    color:#333;
    border-bottom:1px solid #ddd;
    .left{
      height:36px;
      line-height:36px;
      min-width:4em;
      margin-right:16px;
      align-self: flex-start;
    }
    .right{
      flex:1;
      align-self:center;
    }
    &:last-child{
      border-bottom:none;
    }
    textarea,
    input{
      width:100%;
    }
    textarea{
      height:200px;
      padding:12px;
      resize:none;
      box-sizing:border-box;
      border:none;
    }
  }
  input{
    padding:0 12px;
    border:none;
    color:#666;
    outline:none;
    box-sizing:border-box;
  }

  .btn-box{
    padding: 20px 0;
    button{
      border:none;
      border-radius:5px;
      outline:none;
      width:100%;
      display: block;
      height:36px;
      line-height:32px;
      background-color:#4db6ac;
      color:#fff;

      &:active{
        background:#00796b;
      }
    }
  }
`;