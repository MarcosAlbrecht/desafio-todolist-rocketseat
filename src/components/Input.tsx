import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput 
        bg="gray.500"
        h={14}
        size="md"
        borderWidth={0}
        fontFamily="body"
        color="gray.100"
        placeholderTextColor="gray.300"
        _focus={{
            borderWidth: 1,
            borderColor: "produto.purple_dark",
            bg: "gray.500"
        }}
        {...rest}
    />
    
  );
}