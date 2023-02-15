import styled from "styled-components";
import BgImg from '../../assets/images/bg-long.png';

export const Img = styled.img``;
export const Option = styled.option``;
export const Div = styled.div``;
export const Span = styled.span``;
export const Br = styled.br``;
export const H2 = styled.h2``;
export const H4 = styled.h4``;
export const P = styled.p``;
export const Input = styled.input``;
export const Button = styled.button``;
export const Ul = styled.ul``;
export const Li = styled.li``;

export const TitleTextBox = styled.div`
 margin-bottom: 120px;
    padding-left: 50px;
    @media ${({ theme }) => theme.mediaQuery.md} {
       margin-bottom:60px;
       padding-left: 20px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
       margin-bottom:60px;
       padding-left: 20px;
  }
    h2 {
    font-size: 80px;
    font-weight: 500;
    @media ${({ theme }) => theme.mediaQuery.xl} {
        font-size: 65px;
  }
    @media ${({ theme }) => theme.mediaQuery.lg} {
        font-size: 50px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
        font-size: 45px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
        font-size: 45px;
  }
}p {
    font-size: 18px;
    @media ${({ theme }) => theme.mediaQuery.md} {
        font-size: 16px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
        font-size: 16px;
  }
}
`;


export const AppContainer = styled.div`
  min-width: 100%;
    background-image: url(${BgImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #fff;
    z-index: -5;
    overflow-x: hidden;
`;
