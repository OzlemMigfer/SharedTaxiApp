import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    image_logo:{
        alignSelf:'center',
        marginTop:30
    },
    country_input:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginTop:50
    },
    country_picker__container:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:2.5,
        borderColor:'#febd59',
        borderRadius:10,
        padding:5,
        paddingRight:10,
        backgroundColor:'black',
        marginRight:1
    },
    country_code_text:{
        color:'gray'
    },
    phone_input:{
        borderWidth:2.5,
        borderColor:'#febd59',
        borderRadius:10,
        padding:5,
        width:200,
        paddingLeft:15,
        backgroundColor:'black',
        color:'gray'
    },
    button_phone:{
        backgroundColor:'#3e2ab8',
        alignItems:'center',
        padding:10,
        borderRadius:50,
        width:280,
        marginTop:20,
        alignSelf:'center'
    },
    button_continue:{
        color:'white'
    },
    container_line:{
        
    },
    line_view:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        marginTop:50
    },
    line:{
        position:'absolute',
        borderBottomWidth:1,
        borderBottomColor:'gray',
        width:'80%'
    },
    text_container_line:{
        position: 'absolute',
        top: '50%',
        left: '57%',
        transform: [{ translateX: -50 }, { translateY: -10 }],
        backgroundColor: 'black',
        padding: 0,
        borderRadius: 10,
    },
    text_line:{
        textAlign: 'center',
        color:'#a39ea3',
        paddingLeft:10,
        paddingRight:10
    },
    footer_container:{},
    google_button:{},
    google_text:{
        color:'white'
    }
});