import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>Home Screen</Text>
        </TouchableOpacity>
        
        </View>
    );
}