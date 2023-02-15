import React from 'react';
import { Link } from 'react-router-dom';
import { Div, H4, Img, Li, P, Span, Ul } from '../../styles';
import DiscordIcon from '../../../assets/images/Icons/discord.png';
import DiscordBlackIcon from '../../../assets/images/Icons/discordBlack.png';
import DiscordColorFulIcon from '../../../assets/images/Icons/discordColorful.png';
import TwteerIcon from '../../../assets/images/Icons/tweeter.png';
import MobileIcon from '../../../assets/images/Icons/mobile.png';
import { FooterItemsWrapper, FooterLastArea, FooterSocialBox, FooterSocialColorText, FooterSocialWrapper, FooterWrapper, ItemsCol, JoinDiscord, JoinDiscordWrapper } from '../../styles/Footer.style';

const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <FooterItemsWrapper>
                    <ItemsCol>
                        <H4>Fingertipe</H4>
                        <Ul>
                            <Li><Link to="#">Home</Link></Li>
                            <Li><Link to="#">Blog</Link></Li>
                            <Li><Link to="#">Roadmap</Link></Li>
                            <Li><Link to="#">Contact</Link></Li>
                        </Ul>
                    </ItemsCol>
                    <ItemsCol>
                        <H4>Resources</H4>
                        <Ul>
                            <Li><Link to="#">Discord</Link></Li>
                            <Li><Link to="#">Twitter</Link></Li>
                            <Li><Link to="#">Lorem</Link></Li>
                            <Li><Link to="#">Lorem</Link></Li>
                        </Ul>
                    </ItemsCol>
                    <ItemsCol>
                        <H4>About</H4>
                        <Ul>
                            <Li><Link to="#">Lorem</Link></Li>
                            <Li><Link to="#">Lorem</Link></Li>
                            <Li><Link to="#">Lorem</Link></Li>
                            <Li><Link to="#">Lorem</Link></Li>
                        </Ul>
                    </ItemsCol>
                </FooterItemsWrapper>
                <FooterSocialWrapper>
                    <FooterSocialBox>
                        <Img src={DiscordColorFulIcon} alt='img' />
                        <FooterSocialColorText>Join us on Discord</FooterSocialColorText>
                    </FooterSocialBox>
                    <FooterSocialBox>
                        <Img src={MobileIcon} alt='img' />
                        <P>(239) 555-0193</P>
                    </FooterSocialBox>
                    <FooterSocialBox>
                        <Img src={DiscordIcon} alt='img' />
                        <Img src={TwteerIcon} alt='img' />
                    </FooterSocialBox>
                </FooterSocialWrapper>
            </FooterWrapper>

            <FooterLastArea>
                <JoinDiscordWrapper>
                    <JoinDiscord>
                        <Img src={DiscordBlackIcon} alt='img' />
                        <H4>Join Discord</H4>
                    </JoinDiscord>
                </JoinDiscordWrapper>
                <P>@copyright. Md Hamimul Haque</P>
            </FooterLastArea>
        </>
    );
};

export default Footer;

