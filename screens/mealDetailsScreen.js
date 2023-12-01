import { View, Text, ScrollView, Image, StyleSheet, } from "react-native";
import { MEALS } from "../data/dummy-data";
import List from "../components/mealDetails/List";


function MealDetailsScreen ({route}){
    const id = route.params.id

    const selectedMeal = MEALS.find((meal)=> meal.id === id )
    console.log(selectedMeal.ingredients[0])

    

    return <ScrollView>
        <View style={styles.subtitleContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.subtitle}>{selectedMeal.title}</Text>
        </View>
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>
                Ingredients
            </Text >
            
            <List arrayData={selectedMeal.ingredients}/>
        </View>
        
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>
                Steps
            </Text>
           
        </View>
        
    </ScrollView>
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height: 350,
        marginBottom: 32
    },
    subtitle:{
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitleContainer:{
        padding: 6,
        marginHorizontal: 12,
        marginVertical:4,
        borderBottomColor: "#e2b497",
        borderBottomWidth:2,
    },
})

export default MealDetailsScreen