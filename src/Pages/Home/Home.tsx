import React from 'react';
import ImgRightTop from '../../assets/images/homeRight.png';
import searchBtnIcon from '../../assets/images/Icons/search.png';
import { HomeWrapperArea, HomeTopWrapper, HomeLeftSide, HomeTopHeading, HomeTopText, HomeTopImg, SearchBoxWrapper, SearchInput, SearchBoxSelect, SearchBoxButton, HomeRightSide, SearchSelectBtnArea, ImgUpperText1, ImgUpperText2, ImgUpperText3, ImgUpperText4 } from '../../Components/styles/Home.style';
import { Br, Img, Option } from '../../Components/styles';
import RoadMap from './Roadmap/RoadMap';


const Home: React.FC = () => {
    return (
        <HomeWrapperArea>
            <HomeTopWrapper>
                <HomeLeftSide>
                    <HomeTopHeading>Guild Hub of the Metaverse</HomeTopHeading>
                    <HomeTopText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis mattis hendrerit. Praesent vel risus in risus vestibulum aliquet. </HomeTopText>
                    <SearchBoxWrapper>
                        <SearchInput type="text" placeholder='Input Your Email Address' />
                        <SearchSelectBtnArea>
                            <SearchBoxSelect id="owner" name="owner">
                                <Option value="owner">owner</Option>
                                <Option value="owner-2">owner-2</Option>
                            </SearchBoxSelect>
                            <SearchBoxButton>
                                <Img src={searchBtnIcon} alt='searchIcon' />
                            </SearchBoxButton>
                        </SearchSelectBtnArea>
                    </SearchBoxWrapper>
                </HomeLeftSide>
                <HomeRightSide>
                    <HomeTopImg src={ImgRightTop} alt="img" />
                    <ImgUpperText1>
                        Automate payments for quick transparent cashout?
                    </ImgUpperText1>
                    <ImgUpperText2>
                        All on one platform that doesn’t lag? You’re Kidding
                    </ImgUpperText2>
                    <ImgUpperText3>
                        You mean, i can track my scholars’ performance
                    </ImgUpperText3>
                    <ImgUpperText4>
                        Search and Breed Axies and NFTs
                    </ImgUpperText4>
                </HomeRightSide>
            </HomeTopWrapper>
            <RoadMap />
        </HomeWrapperArea>
    );
};

export default Home;