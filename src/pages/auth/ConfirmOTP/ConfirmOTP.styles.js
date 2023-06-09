import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center'
    },
    body_container:{
        marginTop:100
    },
    header:{
        color:'white',
        fontWeight:'600',
        fontSize:16,
        alignSelf:'center',
        marginBottom:25
    },
    input:{
        backgroundColor:'black',
        width:280,
        height:50,
        borderRadius:18,
        borderWidth:3,
        borderColor:'#f3c12c',
        marginBottom:10,
        paddingLeft:15,
        color:'gray'
    },
    button:{
        backgroundColor:'#3e2ab8',
        alignItems:'center',
        padding:10,
        borderRadius:50,
        width:280,
        marginTop:20,
        alignSelf:'center'
    },
    button_text:{
        color:'white',
        fontWeight:'700',
        fontSize:16
    }
});