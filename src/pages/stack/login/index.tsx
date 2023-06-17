import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <TouchableOpacity 
        onPress={() => 
            navigation.reset({
                routes:[{name:'start-drawer'}]
            })
        }>
            <Text>Home Screen</Text>
        </TouchableOpacity>
        
        </View>
    );
}