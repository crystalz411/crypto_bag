import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import CardItem from "./cardItem";

const CardList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
`;


const CardSection: FunctionComponent = () => {
    return (
        <CardList
        contentContainerStyle={{
            paddingRight: 25,
            alignItems: "center",
        }}
        renderItem={({item}: any) => <CardItem {...item} />}
        />
    );
        
}

export default CardSection;