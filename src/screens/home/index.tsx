import React from 'react';
import { View } from 'react-native';

import { Heading, HStack, IconButton, Text, useTheme, VStack, FlatList, Center } from 'native-base';
import { Rocket} from 'phosphor-react-native';

export function Home() {
    const { colors } = useTheme();

    return (
        <VStack alignItems="center">
            <Center
                bg="gray.700"
                w="full" 
                h="150"
                alignItems="center"
            >
                <HStack space={0} alignItems="center" alignContent="center" fontFamily="body" >
                    <Rocket color={colors.blue[400]} size={35}/>
                    <Text fontSize="lgg" fontFamily="heading" fontWeight="900" color="produto.blue"> to</Text>
                    <Text fontSize="lgg"  fontWeight="900" color="produto.purple_dark">do</Text>
                </HStack>
                
            </Center>
            <Center
                bg="gray.400"
                w="full" 
                h="full"
                
            >
            </Center>
        </VStack>
    );
}