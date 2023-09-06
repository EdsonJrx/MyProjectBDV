import { ComponentProps} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ExtraInputProps {
    icon:ComponentProps<typeof MaterialCommunityIcons>["name"];
};

export type IconDescProps = ExtraInputProps