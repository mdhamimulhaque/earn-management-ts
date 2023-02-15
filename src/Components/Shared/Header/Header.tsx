import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../../assets/images/Logo/logo.png';
import { HeaderWrapper, Logo, Nav, Ul, NavList, SocialWrapper, ResponsiveHeaderWrapper, ResponsiveHeaderArea, MenuItemsWrapper, ResponsiveSocialArea, ResponsiveLogoWrapper } from '../../styles/Header.style';
import DiscordIcon from '../../../assets/images/Icons/discord.png';
import TweeterIcon from '../../../assets/images/Icons/tweeter.png';
import { Img } from '../../styles';
import { HiBars4, HiOutlineXMark } from "react-icons/hi2";
import { NavItemType } from '../../../Interface/navItem';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const NavItems: NavItemType[] = [
        {
            id: 1,
            name: "Road Map",
            path: '/',
        },
        {
            id: 2,
            name: "Contact",
            path: '/',
        },
        {
            id: 3,
            name: "Blog",
            path: '/',
        }
    ]
    return (
        <>
            <HeaderWrapper>
                <Logo src={LOGO} />
                <Nav>
                    <Ul>
                        {
                            NavItems?.map(item => <NavList key={item.id}><Link to={item?.path}>{item?.name}</Link></NavList>)
                        }
                    </Ul>
                </Nav>
                <SocialWrapper>
                    <Link to="/">
                        <Img src={DiscordIcon} alt="" />
                    </Link>
                    <Link to="/">
                        <Img src={TweeterIcon} alt="" />
                    </Link>
                </SocialWrapper>
            </HeaderWrapper>

            <ResponsiveHeaderArea>
                <ResponsiveHeaderWrapper>
                    <ResponsiveLogoWrapper>
                        <Logo src={LOGO} />
                    </ResponsiveLogoWrapper>
                    {
                        !isOpen ?
                            <HiBars4 onClick={() => setIsOpen(!isOpen)}></HiBars4> :
                            <MenuItemsWrapper>
                                <HiOutlineXMark onClick={() => setIsOpen(!isOpen)}></HiOutlineXMark>

                                <Nav>
                                    <Ul>
                                        <Logo src={LOGO} />
                                        {
                                            NavItems?.map(item => <NavList key={item.id}><Link to={item?.path}>{item?.name}</Link></NavList>)
                                        }
                                    </Ul>
                                </Nav>

                                <ResponsiveSocialArea>
                                    <SocialWrapper>
                                        <Link to="/">
                                            <Img src={DiscordIcon} alt="" />
                                        </Link>
                                        <Link to="/">
                                            <Img src={TweeterIcon} alt="" />
                                        </Link>
                                    </SocialWrapper>
                                </ResponsiveSocialArea>
                            </MenuItemsWrapper>
                    }

                </ResponsiveHeaderWrapper>
            </ResponsiveHeaderArea>
        </>
    )
}
export default Header;