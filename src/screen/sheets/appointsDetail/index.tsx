import React, { useRef } from 'react'
import ActionSheet, { ActionSheetRef, SheetProps } from "react-native-actions-sheet";
import { Container } from './style'
import { Text } from 'react-native'

export default( props: SheetProps ) =>{
    const actionSheetRef = useRef<ActionSheetRef>(null);
    return (
        <ActionSheet 
            id={props.sheetId}
            ref={actionSheetRef}
            snapPoints={[ 60, 100]}
            initialSnapIndex={0}
            statusBarTranslucent
            drawUnderStatusBar={false}
            gestureEnabled={true}
            defaultOverlayOpacity={0.3}
            indicatorStyle={{
                backgroundColor:'#004682',
            }}
            containerStyle={{
                height:'90%',
            }}
        >
            <Container>
                <Text>Teste</Text>
            </Container>
        </ActionSheet>
    )
}