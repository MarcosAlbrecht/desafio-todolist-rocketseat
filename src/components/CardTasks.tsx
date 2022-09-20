import React from 'react';
import { VStack, HStack, Text, useTheme, IconButton, Checkbox } from 'native-base';
import { Trash, CircleWavy } from 'phosphor-react-native';

type Props = {
    tarefa: string;
    concluida: Boolean;
    handleTasksRemove(task: String, option : string): any;
    handleAlterTask(task: String): any;
    
}

export function CardTasks({tarefa, concluida, handleAlterTask, handleTasksRemove}: Props) {
  const { colors } = useTheme();

  const newState = {
    tarefa,
    concluida
  }

  return (    
    <VStack alignItems="center" justifyContent="center" bg="gray.400" h="90" w="full" pl={5} pr={5} mb={2} borderRadius={5} >
      
      <HStack >
        <VStack w="10%" h="full" alignItems="center" justifyContent="center" >
          <IconButton
              icon={ <Trash size={26} color={colors.gray[300]} />}
              onPress={() => handleAlterTask(tarefa)}
          />   
             
 
        </VStack>
        <VStack w="80%" h="full" pl={5} justifyContent="center">
          {concluida ? <Text strikeThrough color="white" fontSize={18} fontWeight="" >{tarefa}</Text> :
            <Text color="white" fontSize={18} fontWeight="" >{tarefa}</Text>   
          }
          
        </VStack>
        <VStack w="10%" h="full" alignItems="center" justifyContent="center">
          <IconButton
            icon={ <Trash size={26} color={colors.gray[300]} />}
            onPress={() => handleTasksRemove(tarefa, 'remove')}
          />   
        </VStack>
        
        
      </HStack>
      
       
    </VStack>
  );
}