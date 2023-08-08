import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/Engepar.svg'
import InputLogin from '../../../components/InputLogin';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routes/stack.route';

export default function LoginScreen() {
    const navigation = useNavigation<StackTypes>();
    
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