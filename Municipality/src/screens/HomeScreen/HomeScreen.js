import React from 'react'
import { StatusBar } from 'expo-status-bar';

import { 
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    Colors,
    StyledButton,
    Buttontext,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
} from "../../../components/styles.js";

const {brand, darkLight, green} = Colors;

export default function HomeScreen({navigation}) {

    return (
        <>
        <StatusBar style="light" />
                <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('../../../assets/baladia.png')} />
                <WelcomeContainer>
            <PageTitle welcome={true}>Welcome!</PageTitle>
            <StyledFormArea>
                <Line />
                    <StyledButton>
                   <Buttontext>Logout</Buttontext>
                   </StyledButton>
                </StyledFormArea>
        </WelcomeContainer>
                </InnerContainer>
        </>
    )
}