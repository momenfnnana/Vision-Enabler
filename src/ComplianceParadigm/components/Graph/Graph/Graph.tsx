import React from 'react';
import { View, Text, Dimensions, ScrollView, Image } from 'react-native';
const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 320 / 340;
import Color from '@Assets/Constant';
import Underlay from './Underlay';
import { lerp } from './Scale';
import StatementAvarageData from '@ParadigmFakeData/StatementAvarage';

interface Point {
    id: 1;
    date: object;
    value: number;
    color: string;
}

interface GraphProps {
    data: Point[];
}

const lines = [
    {
        id: 1,
        value: 10,
        img: require("@Assets/images/100%.png")
    },
    {
        id: 2,
        value: 7.5,
        img: require("@Assets/images/75%.png")
    },
    {
        id: 3,
        value: 5,
        img: require("@Assets/images/50%.png")
    },
    {
        id: 4,
        value: 2.5,
        img: require("@Assets/images/25%.png")
    },
    {
        id: 5,
        value: 0,
        img: require("@Assets/images/0%.png")
    },
]

const Graph = ({ data }: GraphProps) => {
    const canvasWidth = wWidth - 20;
    const canvasHeight = canvasWidth * aspectRatio;
    const width = canvasWidth - 20;
    const height = canvasHeight - 10;
    const step = width / data.length-10;
    const values = data.map(p => p.value);
    const dates = data.map(p => p.date);
    const minX = Math.min(...dates);
    const maxX = Math.max(...dates);
    const minY = Math.min(...values);
    const maxY = Math.max(...values);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, paddingBottom: 20, backgroundColor: Color.primary }}>
                <View style={{
                    flexDirection: "row",
                    width: width,
                    height,
                    backgroundColor: Color.primary,
                    alignSelf: "center",
                    marginLeft: 0
                }}>
                    <View>
                        {
                            data.map((point, i) => {
                                if (point.value === 0) {
                                    return null;
                                }
                                return (
                                    <View
                                        key={i}
                                        style={{
                                            position: "absolute",
                                            left: i * step+30,
                                            bottom: 0,
                                            width: step,
                                            height: lerp(0, height / 1.2, point.value / maxY),
                                        }}>
                                        <View style={{ flex: 1, marginRight: 0 }}>
                                            <View
                                                style={{
                                                    position: "absolute",
                                                    top: -65,
                                                    bottom: 65,
                                                    left: 55,
                                                    right: 0,
                                                    backgroundColor: point.color,
                                                    borderRadius: 10
                                                }}
                                            />
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <Underlay minY={minY} maxY={maxY} data={lines} date={data} step={step} />
                </View>
            </ScrollView>
        </View>
    )
}
export default Graph;