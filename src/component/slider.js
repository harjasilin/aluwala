import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Slides from './data';
import SlideItem from './slideItem';
import Pagination from './pagination';
import { useSelector } from 'react-redux';

const Slider = () => {

    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null);
    const handleOnScroll = event => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            },
        )(event);
    };

    const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
        setIndex(viewableItems[0]?.index);
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;
    const autoScroll = () => {
        const newIndex = (index + 1) % Slides.length;
        setIndex(newIndex);
        flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    };

    useEffect(() => {
        const scrollInterval = setInterval(autoScroll, 3000);

        return () => {
            clearInterval(scrollInterval);
        };
    }, [index]);
    return (
        <View>
            <FlatList
                ref={flatListRef}
                data={Slides}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                initialScrollIndex={index}
            />
            <Pagination data={Slides} scrollX={scrollX} index={index} />
        </View>

    );
};

export default Slider;

const styles = StyleSheet.create({});