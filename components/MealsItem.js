import {Text, Image, View, StyleSheet, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'

function MealItem ({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability
}){
    const navigation = useNavigation()
    function handleMealSelect (){
        navigation.navigate("MealDetailsScreen", {
            id:id
        })
    }

    return <View style={styles.mealItemStyle}>
        <Pressable
        android_ripple={{color: "#ccc"}}
        style={({pressed})=>pressed? styles.buttonPressed : null}
        onPress={handleMealSelect}
        >
            <View style={styles.innerContainer}>
                <Image source={{uri: imageUrl }} style={styles.image}/>
                <Text style={styles.innerContainer}>{title}</Text>
            </View>
            <View style={styles.secondaryBox}>
                <Text style={styles.secondaryBox}>{duration}min</Text>
                <Text style={styles.secondaryBox}>{complexity.toUpperCase()}</Text>
                <Text style={styles.secondaryBox}>{affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    mealItemStyle:{
        margin:16,
        borderRadius: 15,
        shadowColor:"black",
        shadowOpacity:0.5,
        backgroundColor:"white",
        elevation: 8,
    },
    innerContainer:{
        justifyContent:"center",
        alignItems:"center" ,
        fontSize:18, 
        margin:10, 
    },
    image:{
        width:"100%",
        height:200,
        borderTopRightRadius:15,
        borderTopLeftRadius: 15
    },
    secondaryBox:{
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        padding: 8,
    },
    buttonPressed:{
        opacity:0.5,
        backgroundColor:"white"
    }
})

export default MealItem