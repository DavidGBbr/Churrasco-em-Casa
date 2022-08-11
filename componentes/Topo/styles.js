import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    box:{
        backgroundColor:'#00a79d',

        paddingVertical:20,
        paddingHorizontal:10,


        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

        borderBottomStartRadius:40,
        borderBottomEndRadius:40,
    },

    title:{
        textTransform:'uppercase',
        fontSize:18,
        fontWeight:'700',
        color:'#fff',
    },

    description:{
        color:'#fff'
    },

    imgIcon:{
        width:60,
        height:60,

        marginRight:15,

        borderColor:'#fff',
        borderWidth:1,
        borderRadius:30
    }

});

export default styles;