import { ComponentProps} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface TakePicProp {
    icon:ComponentProps<typeof MaterialCommunityIcons>["name"];
    size:number;
};