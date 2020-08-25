import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import LinksData from '@FakeData/Links';
import Footer from '@Components/Footer/MediaFooter/MediaFooter';
import List from './LinkList';
import { MediaCenter } from "@Services/MainFlow/MediaCenter";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';

const Links = ({ goToInterView }) => {
    const [linksData, setLinksData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                const data = await MediaCenter();
                setLinksData(data.medialinks);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                alert("We got an problem!");
            }
        })();
    }, []);

    return (
        <>
            {isLoading ? <LoadingDialog /> : (
                <View>
                    <FlatList
                        data={linksData}
                        keyExtractor={(i, index) => index.toString()}
                        renderItem={item => <List data={item} />}
                        style={{ marginTop: "5%" }}
                    />
                    <Footer goToInterView={goToInterView} />
                </View>
            )}
        </>
    )
}
export default Links;