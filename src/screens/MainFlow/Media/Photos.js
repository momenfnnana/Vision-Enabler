import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import PhotoData from '../../../fakeData/PhotoTab';
const List = ({ data }) => {
    return (
        <View>
            <Image
                style={{
                    borderRadius: 15,
                    marginHorizontal: "2%",
                    marginVertical: "4%",
                    width: 165,
                    height: 110,
                    resizeMode: "contain"
                }}
                source={data.item.img}
            />
        </View>
    )
}
const Photos = () => {
    console.log(PhotoData);
    return (
        <View>
            <FlatList
                data={PhotoData}
                keyExtractor={i => i.id.toString()}
                renderItem={(item) => { return (<List data={item} />) }}
                numColumns={2}
                style={{
                    alignSelf: "center",
                    marginTop: "5%"
                }}
            />
        </View>
    )
}
export default Photos