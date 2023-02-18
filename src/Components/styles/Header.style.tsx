import styled from "styled-components";

export const HeaderBoxArea = styled.div`
 position: fixed;
 width:100%;
    margin: 0 auto;
    z-index:9999999;
`;

export const HeaderWrapper = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 70px;
    @media ${({ theme }) => theme.mediaQuery.md} {
   display: none;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
   display: none;
  }
`;

export const Logo = styled.img``;
export const Nav = styled.nav``;
export const Ul = styled.ul`
display: flex;
    gap: 50px;
`;
export const NavList = styled.li`
list-style: none;
& a{
    text-decoration: none;
    color:#fff;
}
`;

export const SocialWrapper = styled.div`
  padding: 20px;
    max-width: 105px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.17);
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;


export const ResponsiveHeaderArea = styled.div`
display: none;
@media ${({ theme }) => theme.mediaQuery.md} {
   display: block;
  }
@media ${({ theme }) => theme.mediaQuery.xs} {
   display: block;
  }
`;
export const ResponsiveHeaderWrapper = styled.div`
 display: flex;
    justify-content: space-between;
    svg{
        position: absolute;
    right: 25px;
    top: 25px;
    cursor: pointer;
    font-size: 30px;
    }
`;

export const MenuItemsWrapper = styled.div`
 display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #111E23;
    padding: 0;
  
    ul{
        flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    }
`;
export const ResponsiveSocialArea = styled.div`
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const ResponsiveLogoWrapper = styled.div`
   padding: 20px;
img{
   max-width: 55px;
   width:100%;
}
`;
