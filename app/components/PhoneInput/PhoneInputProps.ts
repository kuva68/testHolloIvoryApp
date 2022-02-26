export interface PhoneInputProps {
    onPress: () => void;
    textColor: string;
    onTextChange: (text: string) => void;
    placeHolder: string;
    countryCode?: string;

}