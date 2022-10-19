import styled, {css} from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    width: 100%;
    padding: 24px;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_300};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.XL}px;
    `}
    
`