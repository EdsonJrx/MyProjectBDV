import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { StackTypes } from '../../../routes/stack.route';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen(){

    const Logout = () =>{
        AsyncStorage.removeItem('refresh_token');
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('username');
        navigation.reset({
            routes:[{name:'login'}]
        });
    }
    const navigation = useNavigation<StackTypes>();
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <TouchableOpacity
            onPress={Logout}>
                <Text>Exit</Text>
           </TouchableOpacity>
        </View>
    );
}