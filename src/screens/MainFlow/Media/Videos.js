import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import PhotoData from '../../../fakeData/PhotoTab';
import Color from '../../../../assets/Constant';
import { FontAwesome5 } from '@expo/vector-icons';
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
            <View
                style={{
                    height: 40,
                    width: 40,
                    borderRadius: 10,
                    backgroundColor: `${Color.primary}95`,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: "15%",
                    left: "10%"
                }}
            >
                <FontAwesome5 name="play" size={18} color={Color.white} />
            </View>
        </View>
    )
}
const Videos = () => {
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
const styles = StyleSheet.create({})
export default Videos