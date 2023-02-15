import React from 'react';
import { MiddleRound, RoadMapPositionBox } from '../styles/RoadMapPositionBox';

interface RoadMapSTYLE {
    roadMapStyle: boolean;
}

const TimelinePositionBox = ({ roadMapStyle }: RoadMapSTYLE) => {
    return (
        <RoadMapPositionBox posiBox={roadMapStyle}>
            <MiddleRound></MiddleRound>
        </RoadMapPositionBox>
    );
};

export default TimelinePositionBox;