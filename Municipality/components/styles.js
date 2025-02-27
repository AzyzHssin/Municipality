
import styled from "styled-components/native";
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';


const StatusBarHeight = Constants.statusBarHeight;
//Colors:
export const Colors = {
    primary: "#ffffff",
    secondary: "#ESE7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand :"#6D28D9",
    green: "#10B981",
    red: "#EF4444",
}

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
   flex: 1;
   padding: 25px;
   padding-top: ${StatusBarHeight + 10}px;
   background-color: ${primary};
`

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`

export const WelcomeContainer = styled(InnerContainer)`
   padding: 25px;
   paddint-top: 10px;
   justify-content: center;
`

export const PageLogo = styled.Image`
  width: 140px;
  height: 140px;
`;

export const Avatar = styled.Image`
   width: 100px;
   height: 100px;
   margin: auto;
   border-radius: 50px;
   border-width: 2px;
   border-color: ${secondary};
   margin-bottom: 10px;
   margin-top: 10px;
`

export const WelcomeImage = styled.Image`
    height: 40%;
    min-width: 100%;
`


export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;

  ${(props) => props.welcome && `
     font-size: 35px;
     
  `}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) => props.welcome && `
  margin-bottom: 5px;
  font-weight: normal;
`}
`;

export const StyledFormArea = styled.View`
  width: 100%;
`;

export const StyledTextInput = styled.TextInput`
   background-color: ${primary};
   padding: 15px;
   padding-left: 55px;
   padding-right: 55px;
   border-radius: 100px;
   font-size: 16px;
   height: 60px;
   margin-vertical: 3px;
   margin-bottom: 10px;
   color: ${tertiary};
`;

export const StyledInputLablel = styled.Text`
   color: ${tertiary};
   font-size: 13px;
   text-align: left;
`;

export const LeftIcon = styled.View`
   left: 15px;
   top: 38px;
   position: absolute;
   z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
   right: 15px;
   top: 38px;
   position: absolute;
   z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
   padding: 15px;
   align-items: center;
   background-color: ${brand};
   justify-content: center;
   border-radius: 60px;
   margin-vertical: 5px;
   height: 50px;
   margin-right: 30;
   margin-left: 30
`;

export const Buttontext = styled.Text`
   color: ${primary};
   font-size: 16px;
`

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
   height: 1px;
   width: 100%;
   background-color: ${darkLight};
   margin-vertical: 10px;

`
