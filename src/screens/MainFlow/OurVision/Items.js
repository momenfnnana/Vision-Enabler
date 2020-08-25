import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import VisionData from '@FakeData/FakeData';
import Card from '@Components/card/CardForList/CardForList';

const Items = ({ data }) => {
    return (
        <>
            <FlatList
                data={data}
                keyExtractor={(i) => i.id}
                renderItem={(item) => <Card data={item} />}
            />
        </>
    )
}
export default Items;