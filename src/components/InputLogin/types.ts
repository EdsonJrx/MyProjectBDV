import { ReactNode, ComponentProps} from 'react';
import { TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ExtraInputProps {
    password:boolean;
    icon?:ComponentProps<typeof MaterialCommunityIcons>["name"];
    secondIcon?:ComponentProps<typeof MaterialCommunityIcons>["name"];
};

export type InputLoginProps = TextInputProps & ExtraInputProps