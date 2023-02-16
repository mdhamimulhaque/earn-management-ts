import styled from "styled-components";

export const HomeWrapperArea = styled.div`
padding-top: 100px;
    min-height: 100vh;
    margin: 0 0 0 140px;
    @media ${({ theme }) => theme.mediaQuery.xxl} {
        margin: 0 0 0 120px;
  }
    @media ${({ theme }) => theme.mediaQuery.xl} {
        margin: 0 20px 0 50px;
  }
    @media ${({ theme }) => theme.mediaQuery.lg} {
        margin: 0 20px 0 40px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
        margin: 0 20px 0 30px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
        margin: 0 20px 0 20px;
  }
`;

export const HomeTopWrapper = styled.section`
display: flex;
gap:10px;
@media ${({ theme }) => theme.mediaQuery.xs} {
        flex-wrap: wrap;
        gap:50px;
  }
`;
export const HomeLeftSide = styled.div`
max-width: 582px;
    width: 100%;
    margin: 0 auto;
    @media ${({ theme }) => theme.mediaQuery.lg} {
      max-width: 370px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
      max-width: 315px;
  }
`;
export const HomeRightSide = styled.div`
position: relative;
font-size:16px;
    @media ${({ theme }) => theme.mediaQuery.lg} {
        font-size: 14px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
        font-size: 13px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
        font-size: 12px;
  }
  @media screen and (max-width: 424px) {
    font-size: 10px;
  }
  
`;
export const HomeTopHeading = styled.h1`
font-size: 80px;
    font-weight: 500;
    margin-top:120px;
    @media ${({ theme }) => theme.mediaQuery.xl} {
        font-size: 65px;
        margin-top:100px;
  }
    @media ${({ theme }) => theme.mediaQuery.lg} {
        font-size: 50px;
        margin-top:50px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
        font-size: 40px;
        margin-top:0px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
        font-size: 45px;
        margin-top:20px;
  }
    @media ${({ theme }) => theme.mediaQuery.sm} {
        font-size: 45px;
        margin-top:20px;
  }
`;
export const HomeTopText = styled.p`
 font-size: 20px;
    margin: 25px 0 35px 0;
    @media ${({ theme }) => theme.mediaQuery.lg} {
        font-size: 15px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
        font-size: 14px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
        font-size: 16px;
  }
`;
export const HomeTopImg = styled.img`
        background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 209, 255, 0.24) 0%, rgba(0, 163, 255, 0) 100%);
       @media ${({ theme }) => theme.mediaQuery.xxl} {
            max-width: 100%;
  }
  @media ${({ theme }) => theme.mediaQuery.xl} {
    max-width: 100%;
  }
  @media ${({ theme }) => theme.mediaQuery.lg} {
    max-width: 100%;
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
    width: 100%;
    object-fit:cover;
  }
  @media ${({ theme }) => theme.mediaQuery.xs} {
    width: 100%;
    object-fit:cover;
  }
      
`;
export const SearchBoxWrapper = styled.div`
background-color: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.18);
    max-width: 477px;
    width:100%;
    border-radius: 90px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    justify-content: space-between;
    @media ${({ theme }) => theme.mediaQuery.md} {
      max-width: 320px;
      padding-left: 15px;
      font-size:12px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
      font-size:12px;
      padding-left: 15px;
  }
`;
export const searchButtonSelectWrapper = styled.div`
display: flex;
`;
export const SearchInput = styled.input`
 background: transparent;
    border: none;
    outline: 0;
    color:#fff;
`;

export const SearchSelectBtnArea = styled.div`
display:flex;
position: relative;
&::before{
  content:'';
  height:70%;
  width:1px;
  background-color:#404053;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  left: -10px;
  @media screen and (max-width: 374px) {
      display: none;
  }
}
`;
export const SearchBoxSelect = styled.select`
 background: transparent;
    border: none;
    outline: 0;
    color:#fff;
    @media ${({ theme }) => theme.mediaQuery.md} {
      font-size:12px;
  }
    @media screen and (max-width: 374px) {
      display:none;
  }
`;
export const SearchBoxButton = styled.div`
 border: none;
    outline: none;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    background: linear-gradient(to top,#107BEE 0%,#359DFD 100%);
    margin: 4px 4px 4px 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${({ theme }) => theme.mediaQuery.lg} {
      height: 50px;
    width: 50px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
      height: 40px;
    width: 40px;
    margin: 4px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
      height: 40px;
    width: 40px;
  }
`;

export const ImgUpperText1 = styled.div`
border-radius: 90px;
    background-color: rgba(255,255,255,0.06);
    padding: 15px 18px;
    position: absolute;
    top: 226px;
    left: 148px;
    max-width: 243px;
    width:100%;
    @media ${({ theme }) => theme.mediaQuery.xxl} {
    top: 152px;
    left: 30px;
  }
    @media ${({ theme }) => theme.mediaQuery.xl} {
    top: 115px;
    left: -33px;
  }
    @media ${({ theme }) => theme.mediaQuery.lg} {
  max-width: 216px;
  top: 125px;
    left: 15px;
}
    @media ${({ theme }) => theme.mediaQuery.md} {
      padding: 11px 14px;
    max-width: 160px;
    top: 62px;
    left: 0px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
    padding: 10px 12px;
    top: 65px;
    left: 12px;
    max-width: 140px;
  }
  @media screen and (max-width: 424px) {
    top: 55px;
    left: 15px;
    max-width: 118px;
  }
  @media screen and (max-width: 374px) {
    top: 43px;
    left: 1px;
  }
`;
export const ImgUpperText2 = styled.div`
    border-radius: 90px;
    background-color: rgba(255,255,255,0.06);
    padding: 15px 18px;
    position: absolute;
    left: 185px;
    bottom: 220px;
    max-width: 243px;
    width:100%;
    @media ${({ theme }) => theme.mediaQuery.xxxl} {
      left: 180px;
  }
    @media ${({ theme }) => theme.mediaQuery.xxl} {
      left: 65px;
    bottom: 145px;
  }
    @media ${({ theme }) => theme.mediaQuery.xl} {
        left: 0;
        bottom: 156px;
  }
    @media ${({ theme }) => theme.mediaQuery.lg} {
      left: 45px;
      bottom: 108px;
      max-width: 216px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
      padding: 11px 14px;
      left: 8px;
    bottom: 46px;
    max-width: 170px;
  }
  @media ${({ theme }) => theme.mediaQuery.xs} {
    padding: 10px 12px;
    left: 15px;
    bottom: 49px;
    max-width: 155px;
  }
  @media screen and (max-width: 424px) {
    max-width: 140px;
    left: 18px;
    bottom: 40px;
  }
  @media (max-width: 374px) {
    left: 2px;
    bottom: 24px;
    max-width: 130px;
  }
`;
export const ImgUpperText3 = styled.div`
   border-radius: 90px;
    background-color: rgba(255,255,255,0.06);
    padding: 15px 18px;
    position: absolute;
    top: 145px;
    right: 135px;
    max-width: 243px;
    width:100%;
    @media ${({ theme }) => theme.mediaQuery.xxxl} {
      top: 161px;
  }
    @media ${({ theme }) => theme.mediaQuery.xxl} {
    top: 90px;
    right: 54px;
  }
    @media ${({ theme }) => theme.mediaQuery.xl} {
        top: 50px;
    right: 0px;
  }
    @media ${({ theme }) => theme.mediaQuery.lg} {
      top: 70px;
    right: 30px;
    max-width: 216px;
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
      padding: 11px 14px;
    top: 35px;
    right: 8px;
    max-width: 148px;
  }
  @media ${({ theme }) => theme.mediaQuery.xs} {
        padding: 10px 12px;
    top: 35px;
    right: 11px;
    max-width: 125px;
  }
  @media screen and (max-width: 424px) {
    max-width: 115px;
  }
  @media screen and (max-width: 374px) {
    padding: 10px 8px 10px 12px;
    top: 28px;
    max-width: 105px;
  }
`;
export const ImgUpperText4 = styled.div`
     border-radius: 90px;
    background-color: rgba(255,255,255,0.06);
    padding: 15px 18px;
    position: absolute;
    right: 180px;
    bottom: 235px;
    max-width: 165px;
    width:100%;
    @media ${({ theme }) => theme.mediaQuery.xxxl} {
      right: 183px;
    bottom: 227px;
  }
    @media ${({ theme }) => theme.mediaQuery.xxl} {
    right: 90px;
    bottom: 180px;
  }
    @media ${({ theme }) => theme.mediaQuery.xl} {
      right: 25px;
    bottom: 180px;
  }
    @media ${({ theme }) => theme.mediaQuery.lg} {
      right: 40px;
    bottom: 140px;
  }
  @media ${({ theme }) => theme.mediaQuery.md} {
      padding: 11px 14px;
      right: 12px;
    bottom: 89px;
    max-width: 132px;
  }
  @media ${({ theme }) => theme.mediaQuery.xs} {
       padding: 10px 8px;
       right: 14px;
    bottom: 82px;
    max-width: 120px;
  }

  @media screen and (max-width: 424px) {
    bottom: 75px;
    max-width: 100px;
  }

  @media screen and (max-width: 374px) {
    padding: 10px 8px;
    right: 10px;
    bottom: 54px;
  }
`;

