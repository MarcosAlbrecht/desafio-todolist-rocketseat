import React, { useState } from 'react';
import { Input } from '../../components/Input';

import { Heading, HStack, IconButton, Text, useTheme, VStack, FlatList, Center } from 'native-base';
import { Rocket, PlusCircle} from 'phosphor-react-native';

export function Home() {
    const { colors } = useTheme();
    const {assignment, setAssigment} = useState<string[]>([]);

    function handleAssigmentAdd(assignment: string){

    }

    return (
        <VStack  flex={1} pb={6} bg="gray.600">
            <VStack 
                alignItems="center" 
                bg="gray.700" 
                w="full" 
                h="150" 
                justifyContent="center"
            >

                <HStack space={0} alignItems="center" alignContent="center" fontFamily="body" >
                    <Rocket color={colors.blue[400]} size={35}/>
                    <Text fontSize="lgg" fontFamily="heading" fontWeight="900" color="produto.blue"> to</Text>
                    <Text fontSize="lgg" fontFamily="heading" fontWeight="900" color="produto.purple_dark">do</Text>
                </HStack>
                      
            </VStack>

            <VStack  
                bg="gray.600"       
                pb="10"
                alignItems="center"                     
            >
                <HStack
                    mt="-6"
                    mr="5"              
                    ml="5"
                >
                    <VStack w="85%" >
                        <Input  placeholder='Adicione uma nova tarefa'></Input>
                    </VStack>

                    <VStack w="15%" ml="2" borderRadius={5} alignItems="center" bg="produto.blue_dark" justifyContent="center">
                        
                        <IconButton
                            icon={ <PlusCircle size={26} color={colors.gray[100]}/>}
                        />                  
                    </VStack>                                   
                </HStack>
            </VStack>

            <VStack w="full" bg="gray.600" pb="5" pl="4" pr="4" >
                <HStack justifyContent="space-between" pb="5" borderBottomWidth={1} borderBottomColor="gray.400">
                    <HStack justifyContent="space-between" alignItems="center">
                        <Text color="produto.blue" fontSize="md" fontStyle="body" fontWeight="bold">Criadas </Text>
                        <Text bg="gray.400" pl="2" pr="2" borderRadius={15} color="white" fontStyle="body" fontWeight="bold">2</Text>    
                    </HStack> 
                    <HStack justifyContent="space-between" alignItems="center">
                        <Text color="produto.purple" fontSize="md" fontStyle="body" fontWeight="bold">Concluídas </Text>
                        <Text bg="gray.400" pl="2" pr="2" borderRadius={15} color="white" fontStyle="body" fontWeight="bold">5</Text>    
                    </HStack>    
                    
                </HStack>             
            </VStack>

            <VStack w="full" alignItems="center" justifyContent="center">
                <Text color="colors.white">texto2</Text>
            </VStack>
           
        </VStack>
    );
}