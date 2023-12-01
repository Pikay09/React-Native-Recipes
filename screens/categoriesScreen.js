import { View, Text, FlatList } from "react-native"
import {CATEGORIES} from '../data/dummy-data'
import CategoriesGrid from "../components/CategoriesGrid"


function CategoriesScreen({navigation}){

    console.log("Categories:", CATEGORIES)
    
    function categoryItem (itemData){
        
        function pressHandler (){
            navigation.navigate('MealsOverview',{
                // name of screen, params
                categoryId: itemData.item.id
            })
        }
    
        return <CategoriesGrid 
        title={itemData.item.title} 
        color={itemData.item.color}
        onPress={pressHandler}
        />
    }

    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item)=> item.id}
        renderItem={categoryItem}  
        numColumns="2"
        />
}

export default CategoriesScreen