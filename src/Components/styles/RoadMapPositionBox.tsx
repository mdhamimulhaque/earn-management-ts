import styled from "styled-components";

interface direProps {
  posiBox: boolean;
}

export const RoadMapFirstPositionBox = styled.div`
  min-height: 179px;
    max-width: 214px;
    width:100%;
    background: #FFFFFF;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translateX(-260px);
    top: 0;

    @media ${({ theme }) => theme.mediaQuery.lg} {
        min-height: 110px;
    max-width: 155px;
    border-radius: 16px;
    transform: translateX(-210px);
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
        min-height: 90px;
    max-width: 135px;
    border-radius: 16px;
    transform: translateX(-160px);
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
        min-height: 70px;
    max-width: 105px;
    border-radius: 16px;
    transform: translateX(-125px);
    top: 10px;
  }
  @media screen and (max-width: 424px) {
    min-height: 55px;
    max-width: 66px;
    transform: translateX(-105px);
  }
`;
export const MiddleRoundFirstBox = styled.div`
   min-height: 102px;
    max-width: 102px;
    width: 100%;
    border-radius: 50%;
    background: linear-gradient(180deg, #15C4C6 0%, #0C79F4 100%);
    border: 6px solid #56A5F5;
    @media ${({ theme }) => theme.mediaQuery.xl} {
        min-height: 75px;
    max-width: 75px;
  }
    @media ${({ theme }) => theme.mediaQuery.lg} {
        min-height: 65px;
    max-width: 65px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
        min-height: 50px;
    max-width: 50px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
        min-height: 50px;
    max-width: 50px;
  }
  @media screen and (max-width: 424px) {
    min-height: 30px;
    max-width: 30px;
  }
`;
export const RoadMapPositionBox = styled.div<direProps>`
    min-height: 133px;
    max-width: 214px;
    width: 100%;
    background: #1D334073;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform:${props => props.posiBox ? "translateX(50%)" : "translateX(-50%)"};
    top: 75px;
    @media ${({ theme }) => theme.mediaQuery.lg} {
        min-height: 95px;
    max-width: 155px;
    border-radius: 16px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
        min-height: 90px;
    max-width: 135px;
    border-radius: 16px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
        min-height: 70px;
    max-width: 105px;
    border-radius: 16px;
  }
  @media screen and (max-width: 424px) {
    min-height: 55px;
    max-width: 66px;
  }
`;
export const MiddleRound = styled.div`
     min-height: 102px;
    max-width: 102px;
    width:100%;
    border-radius: 50%;
    background: linear-gradient(180deg, #778282 0%, #2F3842 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
    border: 6px solid #979EA0;
    @media ${({ theme }) => theme.mediaQuery.xl} {
        min-height: 75px;
    max-width: 75px;
  }
    @media ${({ theme }) => theme.mediaQuery.lg} {
        min-height: 65px;
    max-width: 65px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
        min-height: 50px;
    max-width: 50px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
        min-height: 50px;
    max-width: 50px;
  }
  @media screen and (max-width: 424px) {
    min-height: 30px;
    max-width: 30px;
  }
`;
