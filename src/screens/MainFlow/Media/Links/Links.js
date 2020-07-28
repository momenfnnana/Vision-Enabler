import React from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import LinksData from '@FakeData/Links';
import Footer from '@Components/Footer/MediaFooter/MediaFooter';
import List from './LinkList';
const Links = ({ goToInterView }) => {
    return (
        <View>
            <FlatList
                data={LinksData}
                keyExtractor={i => i.id.toString()}
                renderItem={item => <List data={item} />}
                style={{ marginTop: "5%" }}
            />
            <Footer goToInterView={goToInterView} />
        </View>
    )
}
export default Links