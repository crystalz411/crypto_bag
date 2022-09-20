import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import CardItem from "../components/card/cardItem";

import { colors } from "../components/colors";
import { Container } from "../components/shared";

const HomeContainer = styled(Container)`
  background-color: ${colors.darkPurple};
  width: 100%;
  flex: 1;
`;

const CardContainer = styled.View`
margin: 20px;
`

const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
        <input
        style={{ 
            backgroundColor: colors.lightPurple, 
            borderRadius: '10px',
            height: '30px',
            margin: '20px',
            color: colors.white,
        }}
        placeholder="Your Address or heroTag"
        />
      <StatusBar style="light" />
      <CardContainer>
      <CardItem/>
      </CardContainer>
      {/* <TextInput
        label="Label"
        style={{ backgroundColor: colors.lightPurple}}
      /> */}
    </HomeContainer>
  );
};

export default Home;
