import styled from "styled-components";

export const FooterBoxArea = styled.div`
 border-top: 3px solid rgba(255, 255, 255, 0.12);
`;
export const FooterWrapper = styled.div`
max-width:1400px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-top: 75px;
    padding-bottom: 15px;
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
  @media ${({ theme }) => theme.mediaQuery.xs} {
        grid-template-columns:repeat(1, 1fr);
        row-gap:50px;
        padding: 0 35px;
  }

   
`;
export const FooterItemsWrapper = styled.div`
display: flex;
    justify-content: space-around;
    @media ${({ theme }) => theme.mediaQuery.xs} {
        justify-content: space-between;
  }
`;
export const ItemsCol = styled.div`

h4{
    font-size: 15px;
    font-weight: 700;
}
ul{
    li {
    list-style: none;
    margin-top: 20px;
    a {
    text-decoration: none;
    font-weight: 500;
    line-height: 24px;
    color:#fff;
}
}
}
`;

export const FooterSocialWrapper = styled.div`
@media ${({ theme }) => theme.mediaQuery.xs} {
        display: flex;
        flex-direction:column;
        align-items:center;
  }
`;
export const FooterSocialBox = styled.div`
display: flex;
    gap: 20px;
    margin-bottom: 25px;
`;

export const FooterSocialColorText = styled.p`
    color: #5865F2;
`;

export const FooterLastArea = styled.div`
position:relative;
p{
    text-align: center;
    text-align: center;
    font-size: 14px;
    padding:75px 0 10px 0;
    @media ${({ theme }) => theme.mediaQuery.xs} {
        padding:120px 0 10px 0;
  }
}
`;

export const JoinDiscordWrapper = styled.div``;
export const JoinDiscord = styled.div`
    height: 122px;
    width: 122px;
    border-radius: 100%;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    right: 35px;
    bottom: 35px;
    background-color: #fff;
    color:#000;
    @media ${({ theme }) => theme.mediaQuery.xs} {
        height: 90px;
    width: 90px;
    font-size: 12px;
    right: 50%;
    bottom: 50px;
    transform: translate(50%, 0%);
  }
`;

