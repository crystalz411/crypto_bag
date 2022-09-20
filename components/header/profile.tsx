import React, { FunctionComponent, ReactNode } from "react";
import { GestureResponderEvent, ImageStyle, ViewStyle } from "react-native";
import { TextStyle, StyleProp, ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";

import RegularText from "../Tests/regularText";
import SmallText from "../Tests/smallText";

const StyledView = styled.View`
flex-direction: column;
height: 45px;
width: 45px;
border-radius: 15px;
`;


const StyledImage = styled.View`
resize-mode: cover;
width: 100%;
height: 100%;
border-radius: 15px;
`;

interface ProfileProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyled?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent = () => {
    return (
        <StyledView>
            <StyledImage/>
        </StyledView>
    );
};
export default Profile;