import { ComponentProps} from 'react';
import { TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ExtraInputProps {
    icon?:ComponentProps<typeof MaterialCommunityIcons>["name"];
    secIcon?:ComponentProps<typeof MaterialCommunityIcons>["name"];
    password:boolean;
};

export type InputLoginProps = TextInputProps & ExtraInputProps

export type TSecIcon = ComponentProps<typeof MaterialCommunityIcons>["name"];