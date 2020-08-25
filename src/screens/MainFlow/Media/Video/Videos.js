import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import PhotoData from '@FakeData/PhotoTab';
import Footer from '@Components/Footer/MediaFooter/MediaFooter';
import List from './VideoList';
import styles from './Style'
import { MediaCenter } from "@Services/MainFlow/MediaCenter";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';
const Videos = ({ goToInterView }) => {
    const [videoData, setVideoData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                const data = await MediaCenter();
                setVideoData(data.videos);
                console.log("data", data.videos);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                alert("We got an problem!");
            }
        })();
    }, []);
    return (
        <View>
            <FlatList
                data={videoData}
                keyExtractor={(i, index) => index.toString()}
                renderItem={(item) => { return (<List data={item} />) }}
                numColumns={2}
                style={styles.FlatList}
            />
            <Footer goToInterView={goToInterView} />
        </View>
    )
}
export default Videos;