import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    container:{
        padding:30,

        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between',
    },

    card:{
        backgroundColor:'#ddf2ed',
        minWidth:150,

        alignItems:'center',

        paddingHorizontal:20,
        paddingVertical:10,
        marginBottom:10,

        borderWidth:1,
        borderColor:'#e6e6e6',
        borderRadius:5,
    },

    imgIcon:{
        width:30,
        height:30,
    },

    boxTexto:{
        color:'#00a79d',
    },

    boxValor:{
        color:'#00a79d',
        fontSize:20,
        fontWeight:'700',
    }
});

export default styles;