import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export function ExitScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text>Exit</Text>
        </TouchableOpacity>
        </View>
    );
}