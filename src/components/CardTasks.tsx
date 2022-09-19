import React from 'react';
import { IconProps } from 'phosphor-react-native';
import { VStack, HStack, Text, Box, IconButton } from 'native-base';
import { Rocket, PlusCircle} from 'phosphor-react-native';

type Props = {
    tarefa: string;
    concluida: Boolean;
    handleAlterStatusTask(task: String, status: Boolean): any
}

export function CardTasks({tarefa, concluida, handleAlterStatusTask}: Props) {
  return (    
    <VStack alignItems="center">
      {console.log('renderizou o card')}
      <Text color="white">{tarefa} - {concluida.toString()}</Text> 
      <IconButton
        icon={ <PlusCircle size={26} color="white" />}
        onPress={() => handleAlterStatusTask(tarefa, concluida)}
      />   
    </VStack>
  );
}