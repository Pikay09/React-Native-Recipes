import { View, Text, StyleSheet, } from "react-native";

export default function List({arrayData}){
    arrayData.map((data,idx)=>{
        console.log("array DATA",data)
        return <View style={styles.listItem} key={idx}>
            <Text>{data}</Text>
            <Text>Hello</Text>
        </View>
    })
}

const styles = StyleSheet.create({
    
    listItem:{
        backgroundColor:"#e2b497"
    },
    itemText:{
        color:"black",
        textAlign:"center"
    }
})