import styled from 'styled-components';

export const Header = styled.div`
  height: 44px;
  text-align:center;
  background:#4db6ac;
  color:#fff;
  font-size:24px;
  line-height:44px;
`;

export const Footer = styled.div`
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  height:60px;
  display:flex;
  background:#fff;
  border-top:1px solid rgba(77,182,172,.2);
  box-shadow:-2px -2px 10px 3px rgba(77,182,172,.2);
  user-select:none;
  .item{
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    .item-link{
      text-align:center;
      cursor:pointer;
      &.active{
        color:rgba(77,182,172,1);
        .icon-font, .name{
          color:rgba(77,182,172,1);
        }
      }
    }
    .icon-font{
      font-size:20px;
      color:#666;
    }
    .name{
      color:#666;
      font-size:12px;
    }
  }
`;