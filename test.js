import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DATA: [],
            previous: 0,
            hide: false,
        };
    }

    componentDidMount() {
        var array = [];
        for (var i = 0; i < 100; i++) {
            var a = { id: i, value: i };
            array.push(a);
        }
        this.setData(array);
    }

    setData(a) {
        this.setState({
            DATA: a,
        });
    }

    Item({ title }) {
        return (
            <View
                style={{
                    width: '100%',
                    height: 30,
                    marginTop: 5,
                    backgroundColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text />
            </View>
        );
    }

    _onScroll(event) {
        // console.log('>>>>>>>>>>>'+this.state.data);
        if (this.state.previous < event) {
            this.setState({
                hide: true,
                previous: event,
            });
        } else {
            this.setState({
                hide: false,
                previous: event,
            });
        }

        console.log(event);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.state.hide == true ? null : (
                    <View
                        style={{
                            width: '100%',
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text>Hide me while scrolling</Text>
                    </View>
                )}
                <FlatList
                    onScroll={e => this._onScroll(e.nativeEvent.contentOffset.y)}
                    data={this.state.DATA}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                width: '100%',
                                height: 30,
                                marginTop: 5,
                                backgroundColor: 'green',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text />
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});