import React, { FunctionComponent, ReactNode } from "react";
import { GestureResponderEvent, ImageStyle, ViewStyle } from "react-native";
import { TextStyle, StyleProp, ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ScreenWidth } from "../shared";

import RegularText from "../Tests/regularText";
import BigText from "../Tests/bigText";
import SmallText from "../Tests/smallText";

const CardBackground = styled.ImageBackground`
  height: 100%;
  width: ${ScreenWidth * 0.67}px;
  resize-mode: cover;
  background-color: ${colors.lightPurple};
  border-radius: 25px;
  overflow: hidden;
`;

const CardRow = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 100%;
`;

const CardItem: FunctionComponent = () => {
  return (
    <CardBackground>
          <CardRow>
            <RegularText textStyles={{ color: colors.white, textAlign: 'center' }}>
            See your current Wallet Value in EGLD
            </RegularText>
            <br/>
            
            <BigText textStyles={{ color: colors.white }}>
              0.00 EGLD
            </BigText>
            
            <SmallText textStyles={{ color: colors.white }}>
              £0.00
            </SmallText>
          </CardRow>
    </CardBackground>
  );
};
export default CardItem;
