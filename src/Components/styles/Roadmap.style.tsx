import styled from "styled-components";

interface SpaceRoadmapText {
    spaceRoadmapText: boolean;
}



export const RoadMapArea = styled.div`
  margin-top: 100px;
`;
export const RoadMapWrapper = styled.div`
  max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    @media ${({ theme }) => theme.mediaQuery.xxxl} {
        max-width: 1200px;
  }
    @media ${({ theme }) => theme.mediaQuery.xxl} {
        max-width: 1024px;
  }
    @media ${({ theme }) => theme.mediaQuery.xl} {
        max-width: 900px;
  }
    @media ${({ theme }) => theme.mediaQuery.lg} {
        max-width: 768px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
        max-width: 615px;
  } 
  @media ${({ theme }) => theme.mediaQuery.xs} {
    max-width: 300px;
  }
  @media ${({ theme }) => theme.mediaQuery.sm} {
    max-width: 426px;
  }
   
`;
export const FirstTopicWrapper = styled.div`
display: flex;
border-left: 3px solid rgba(255, 255, 255, 0.12);
    border-bottom-left-radius: 30px;
    @media ${({ theme }) => theme.mediaQuery.xs} {
  flex-wrap:wrap;
  }
img{
    width: 100%;
    background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 56, 255, 0.24) 0%, rgba(0, 133, 255, 0) 100%);
}
`;
export const FirstTopicTextWrapper = styled.div`
    flex-grow: 3;
    position: relative;
    

&::before{
    content:'';
    position: absolute;
    border-top: 3px solid rgba(255, 255, 255, 0.12);
    border-top-right-radius: 30px;
    min-height: 20px;
    width: 100%;
    top: -12px;
    right: 100%;
}
`;

export const FirstTopicImgBox = styled.div`
flex-grow: 1;
padding: 20px;
@media ${({ theme }) => theme.mediaQuery.md} {
  padding:0;
  }
@media ${({ theme }) => theme.mediaQuery.xs} {
  padding:0;
  }
`;

export const RoadMapFirstTextBox = styled.div`
padding: 0 0 50px 150px;
position: relative;

@media ${({ theme }) => theme.mediaQuery.lg} {
    padding: 0 0 50px 130px;
  }
@media ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 0 50px 90px;
  }
@media ${({ theme }) => theme.mediaQuery.xs} {
    padding: 0 20px 0 70px;
  }
 h2 {
    font-size: 70px;
    font-weight: 100;
    @media ${({ theme }) => theme.mediaQuery.xl} {
        font-size: 58px;
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
} h4 {
    font-size: 33px;
    font-weight: 500;
    color: #15C4C6;
}
 p {
    color: rgba(255, 255, 255, 0.39);
    max-width: 285px;
    width: 100%;
}

`;
export const RoadMapTextBox = styled.div<SpaceRoadmapText>`
padding: 0 150px;

@media ${({ theme }) => theme.mediaQuery.md} {
    padding:${props => props.spaceRoadmapText ? "0 90px 0 0" : "0 0 0 90px"};
  }
@media ${({ theme }) => theme.mediaQuery.xs} {
    padding:${props => props.spaceRoadmapText ? "0 70px 0 0" : "0 0 0 70px"};
  }
 h2 {
    font-size: 70px;
    font-weight: 100;
    @media ${({ theme }) => theme.mediaQuery.xl} {
        font-size: 58px;
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
} h4 {
    font-size: 33px;
    font-weight: 500;
    color: #15C4C6;
}
 p {
    max-width: 385px;
    width: 100%;
    color: rgba(255, 255, 255, 0.39);
}
`;

export const TopicWrapper = styled.div`
 border-top: 3px solid rgba(255, 255, 255, 0.12);
    width: 100%;
    padding: 50px 0 50px 0;
    display: flex;
    flex-direction: column;

    &:nth-child(even) {
    border-right: 3px solid rgba(255, 255, 255, 0.12);
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    width: calc(100% - 30px);
    margin-left: 30px;
    align-items: flex-end;
    position: relative;
    text-align:right;
  
}

&:nth-child(odd) {
    border-left: 3px solid rgba(255, 255, 255, 0.12);
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    width: calc(100% - 30px);
    margin-right: 30px;
    align-items: flex-start;
position: relative;
}

&:first-child {
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}

&:last-child {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
`;

export const LastTopicWrapper = styled.div`
border-left: 3px solid rgba(255, 255, 255, 0.12);
    border-top: 3px solid rgba(255, 255, 255, 0.12);
    border-top-left-radius: 30px;
    width: calc(100% - 30px);
    padding: 50px 0 50px 0;
`;
export const ContactFormBox = styled.form`
padding: 0 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    @media ${({ theme }) => theme.mediaQuery.xs} {
        padding: 0 20px;
  }
`;
export const FormLeftSide = styled.div`
 font-size: 25px;
    line-height: 50px;
    span {
    color: #6C6C6C;
}
`;
export const FormRightSide = styled.div`
 line-height: 50px;
 input{
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.21);
    padding-bottom: 10px;
    outline: none;
    width: 100%;
    color: rgba(255, 255, 255, 0.21);
 }
`;

