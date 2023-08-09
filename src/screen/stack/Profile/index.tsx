import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { StackTypes } from '../../../routes/stack.route';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen(){
    const navigation = useNavigation<StackTypes>();
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <TouchableOpacity
            onPress={() => 
            navigation.reset({
                routes:[{name:'Login'}]
            })
            }>
                <Text>Exit</Text>
           </TouchableOpacity>
        </View>
    );
}