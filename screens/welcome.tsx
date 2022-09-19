import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Image } from 'react-native';
import BigText from "../components/Tests/bigText";
import SmallText from "../components/Tests/smallText";
import background from "./../assets/bgs/background_v1.png";
import RegularButton from "../components/Buttons/regularButton";
import { colors } from "../components/colors";
import { Container } from "../components/shared";

const WelcomeContainer = styled(Container)`
background-color: ${colors.secondary};
justify-content: space-between;
width: 100%;
height: 100%;
`;

const TopSection = styled.View`
width: 100%;
flex: 1;
max-height: 55%;
`;

const TopImage = styled.View`
width: 100%;
height: 100%;
resize-mode: stretch;
`;

const BottomSection = styled.View`
width: 100%;
padding: 25px;
flex: 1;
justify-content: flex-end;
`;

const Welcome: FunctionComponent = () => {
    return (
        <>
        <StatusBar style="light"/>
        <WelcomeContainer>
            <TopSection>
                <Image 
                source={background} 
                style={{ 
                    width: '100%',
                    height: '100%',
                    resizeMode: 'stretch',
                    }}/>
            </TopSection>
            <BottomSection>
                <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
                    Best way to track your crypto
                </BigText>
                <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
                    Best payment method, connnects your money to your friends, family
                </SmallText>
                <RegularButton onPress={() => {}}>
                    Get started
                </RegularButton>
            </BottomSection>
        </WelcomeContainer>
        </>
    )
}

export default Welcome;