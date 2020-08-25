import React, { useState,useEffect } from "react";
import { View, FlatList } from 'react-native';
import PhotoData from '@FakeData/PhotoTab';
import Footer from '@Components/Footer/MediaFooter/MediaFooter';
import List from './PhotoList';
import styles from './Styles';
import { MediaCenter } from "@Services/MainFlow/MediaCenter";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';

const Photos = ({ goToInterView }) => {
    const [PhotoData,setPhotoData]= useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                const data = await MediaCenter();
                console.log("aaa", data.photos);
                setPhotoData(data.photos);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                alert("We got an problem!");
            }
        })();
    }, []);

    return (
        <>
            {isLoading?<LoadingDialog />:(
        <View>
            <FlatList
                data={PhotoData}
                keyExtractor={(i, index) => index.toString()}
                renderItem={(item) => { return (<List data={item} />) }}
                numColumns={2}
                style={styles.FakeData}
            />
            <Footer goToInterView={goToInterView} />
        </View>
            )}
        </>
    )
}
export default Photos