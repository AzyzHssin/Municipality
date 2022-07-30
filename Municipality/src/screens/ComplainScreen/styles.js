import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        height: '50%',
    },
    header:{
        flex:1,
        width:1000 ,
       
    },

    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    complainContainer:{
        height: 100,
        width:340 ,
        backgroundColor: '#CAFFF3',
       marginLeft:10,
       marginRight:10,
       marginBottom:10,
        borderColor:'#1277FA',
      
        marginTop:20,
        borderRadius: 30,
        overflow: 'hidden',
        flexDirection: 'row',
    flexWrap: 'wrap',
    }
})