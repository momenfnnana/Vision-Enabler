import React from 'react';
import { FlatList } from 'react-native';
import VisionData from '@FakeData/FakeData';
import Card from '@Components/card/CardForList/CardForList';

const Items = () => <FlatList
    data={VisionData}
    keyExtractor={(i) => i.id.toString()}
    renderItem={(item) => <Card data={item} />}
/>
export default Items