export interface FullNameInputProps {
   
    textColor: string;
    onNameChange: (prop?: string, text?: string) => void;
    firstNamePlaceHolder: string;
    lastNamePlaceHolder: string;
    firstNameError: string | null;
    lastNameError: string | null;
    variant: 'fullName' | 'userName'
    description: string
}