import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/Engepar.svg'
import InputLogin from '../../../components/InputLogin';

export default function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Logo width={128} height={150}></Logo>
        <InputLogin/>
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