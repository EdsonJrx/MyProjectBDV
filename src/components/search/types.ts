import { ComponentProps} from 'react';
import { TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ExtraInputProps {
    icon?:ComponentProps<typeof Ionicons>["name"];
    handleClear:() => void;
};

export type InputLoginProps = TextInputProps & ExtraInputProps