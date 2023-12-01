import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/categoriesScreen'
import MealsOverviewScreen from './screens/mealsOverview';
import MealDetailsScreen from './screens/mealDetailsScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {

  function drawerNavigator (){
    return <Drawer.Navigator
            screenOptions={
              {
                headerStyle: {backgoundColor:"blue"},
                headerTintColor: "black",
                sceneContainerStyle:{backgoundColor:"blue"},
                drawerContentStyle:{backgoundColor:"blue"},
              }
            }
    >
        <Drawer.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title:"All Categories",
          drawerIcon: ((color, size)=>{
            <Ionicons name='list' color={color} size={size}/>
          })
        }}
        />
        <Drawer.Screen
        name="Meals"
        component={MealsOverviewScreen}
        options={{
          title:"favourites",
          drawerIcon: ((color, size)=>{
            <Ionicons name="star" color="black" size={size}/>
          })
        }}
        />
      </Drawer.Navigator>
  }
  return (
    // <SafeAreaView style={styles.safeScreen}>
      <>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerStyle:{backgoundColor: 'blue'},
            contentStyle:{backgroundColor: 'white'},
            headerTintColor:"black"
          }}
          >
            <Stack.Screen
            name='Drawer'
            component={drawerNavigator}
            options={
              {headerShown:false}
            }
            />
            <Stack.Screen
            name='MealsCategory'
            component={CategoriesScreen}
            options={{
              title: 'All Categories'
            }}
            />
            <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            />
            <Stack.Screen
            name='MealDetailsScreen'
            component={MealDetailsScreen}
            options={{
              title: 'About the meal'
            }}
            />

          </Stack.Navigator>

        </NavigationContainer>

      </>
    // </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeScreen:{
    flex:1
  }
});
