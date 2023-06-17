import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export default function ProfileScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <TouchableOpacity
            onPress={() => 
            navigation.reset({
                routes:[{name:'login'}]
            })
            }>
                <Text>Exit</Text>
           </TouchableOpacity>
        </View>
    );
}