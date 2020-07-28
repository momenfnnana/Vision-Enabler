import React from 'react';
import {
    View,
    FlatList
} from 'react-native';
import PhotoData from '@FakeData/PhotoTab';
import Footer from '@Components/Footer/MediaFooter/MediaFooter';
import List from './VideoList';
import styles from './Style'
const Videos = ({ goToInterView }) => {
    return (
        <View>
            <FlatList
                data={PhotoData}
                keyExtractor={i => i.id.toString()}
                renderItem={(item) => { return (<List data={item} />) }}
                numColumns={2}
                style={styles.FlatList}
            />
            <Footer goToInterView={goToInterView} />
        </View>
    )
}
export default Videos