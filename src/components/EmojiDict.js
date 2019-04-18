import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

class EmojiDict extends Component {
    render() {
        return (
            <FlatList
                contentContainerStyle={styles.container}
                data={[
                    { key: '😃', value: '😃 Smiley' },
                    { key: '🚀', value: '🚀 Rocket' },
                    { key: '⚛️', value: '⚛️ Atom Symbol' }
                ]}
                renderItem={({ item }) => <Text>{item.value}</Text>}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



export default EmojiDict;