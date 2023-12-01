import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function IconButton({icon, color, onPress}){
    return <Pressable
    onPress={onPress}
    android_ripple={{color: "#ccc"}}
        style={({pressed})=>pressed? styles.buttonPressed : null}
    >
        <Ionicons name={icon} size={24} color={color}/>
    </Pressable>
}

const styles = StyleSheet.create({

    buttonPressed:{
        opacity:0.5,
        backgroundColor:"white"
    }
})