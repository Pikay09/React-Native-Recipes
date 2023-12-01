import {View, Text, StyleSheet, Pressable} from 'react-native'

export default function CategoriesGrid({title, color, onPress}){

    return <View style={styles.gridItems}>
        <Pressable
        style={styles.pressableContainer}
        onPress={onPress}
        >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text>{title}</Text>
            </View>
        </Pressable>
        
    </View>
}

const styles = StyleSheet.create({
    gridItems:{
        flex:1,
        height: 150,
        width: 200,
        borderRadius: 8,
        shadowColor:'black',
        elevation: 4,
        backgroundColor: "white",
        shadowOffset: {width: 0, height: 2},
        margin:16,
        shadowRadius: 8,
        shadowOpacity: 0.25

    },
    innerContainer:{
        flex:1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressableContainer:{
        flex: 1
    }
})