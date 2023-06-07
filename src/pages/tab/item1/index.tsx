import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export function Item1Screen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Item 1</Text>
        </View>
    );
}