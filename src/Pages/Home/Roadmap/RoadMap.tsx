import React from 'react';
import Img1 from '../../../assets/images/FirstTopicImg.png';
import { roadmapTopicsTypes } from '../../../Interface/roadmapTopic';
import { FirstTopicImgBox, FirstTopicTextWrapper, FirstTopicWrapper, LastTopicWrapper, RoadMapArea, RoadMapFirstTextBox, RoadMapTextBox, RoadMapWrapper, TopicWrapper } from '../../../Components/styles/Roadmap.style';
import { H2, H4, Img, P, TitleTextBox } from '../../../Components/styles';
import ContactForm from '../ContactForm/ContactForm';
import TimelinePositionBox from '../../../Components/TimelinePositionBox/TimelinePositionBox';
import TimelineFirstPositionBox from '../../../Components/TimelinePositionBox/TimelineFirstPositionBox';

interface Index {
    index: number;
}

const RoadMap = () => {
    const roadmapTopics: roadmapTopicsTypes[] = [
        {
            id: 2,
            year: '2022',
            title: 'Q2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor '
        },
        {
            id: 3,
            year: '2022',
            title: 'Q3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor '
        },
        {
            id: 4,
            year: '2022',
            title: 'Q4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor '
        },
        {
            id: 5,
            year: '2023',
            title: 'Q1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor '
        },
        {
            id: 6,
            year: '2023',
            title: 'Q2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor '
        },
    ]

    const roadmapStyleHandle = (index: number) => {
        return index % 2 === 0 ? true : false;
    }

    return (
        <RoadMapArea>
            <RoadMapWrapper>
                <FirstTopicWrapper>
                    <FirstTopicTextWrapper>
                        <TitleTextBox>
                            <H2>Road Map</H2>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </P>
                        </TitleTextBox>
                        <RoadMapFirstTextBox>
                            <H2>2022</H2>
                            <H4>Q1</H4>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </P>
                            <TimelineFirstPositionBox />
                        </RoadMapFirstTextBox>
                    </FirstTopicTextWrapper>
                    <FirstTopicImgBox>
                        <Img src={Img1} alt="" />
                    </FirstTopicImgBox>
                </FirstTopicWrapper>

                {
                    roadmapTopics.map((item, index) => <TopicWrapper key={item.id}>
                        <RoadMapTextBox spaceRoadmapText={roadmapStyleHandle(index)}>
                            <H2>{item.year}</H2>
                            <H4>{item.title}</H4>
                            <P>{item.text}</P>
                        </RoadMapTextBox >
                        <TimelinePositionBox roadMapStyle={roadmapStyleHandle(index)} />
                    </TopicWrapper>)
                }
                <LastTopicWrapper>
                    <TitleTextBox>
                        <H2>Contact Us</H2>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </P>
                    </TitleTextBox>
                    <ContactForm />
                </LastTopicWrapper>

            </RoadMapWrapper>

        </RoadMapArea >
    );
};

export default RoadMap;