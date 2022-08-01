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
                <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('../../../assets/Welcome.jpg')} />    
            <PageTitle welcome={true}>Welcome!</PageTitle>
                </InnerContainer>
                
    )
}