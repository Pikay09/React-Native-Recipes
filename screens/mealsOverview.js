import { View, FlatList, Text } from "react-native"
import MealItem from "../components/MealsItem"
import { MEALS } from "../data/dummy-data"

export default function MealsOverviewScreen ({navigation, route}){
    console.log(MEALS)

    const catId = route.params.categoryId || "c5" 

    const displayMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0; 
    })

    function renderMealItem (itemData){

        const {item} = itemData

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
            id: item.id
        }

        return <MealItem {...mealItemProps}/>
    }

    return <View>
        <FlatList
        data={displayMeals}
        keyExtractor={(item)=> item.id}
        renderItem={renderMealItem}
        />
    </View>
}