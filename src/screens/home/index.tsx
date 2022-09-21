import React, { useState } from 'react';

import { Input } from '../../components/Input';
import { CardTasks } from '../../components/CardTasks';

import { Heading, HStack, IconButton, Text, useTheme, VStack, FlatList, ScrollView, View } from 'native-base';
import { Rocket, PlusCircle, Trash, CheckCircle, Circle} from 'phosphor-react-native';
import { Alert  } from 'react-native';
import { background } from 'native-base/lib/typescript/theme/styled-system';

export function Home() {
    const { colors } = useTheme();
    const [tasks, setTasks] = useState<typeof tarefas[]>([]);
    const [tarefa, setTarefa] = useState('');
    const [concluida, setConcluida] = useState(false);
    const [criadas, setCriadas] = useState<number>(0);
    const [concluidas, setConcluidas] = useState<number>(0);
    const [taskIndex, setTaskIndex] = useState<typeof tarefas[]>([]);;
   
    const tarefas = {
        tarefa: tarefa,
        concluida: false,
    }

    function handleTasksAdd(){
        //console.log(assignments)
        if (!tarefa) {
            return Alert.alert('Registrar','Preencha o campo');       
        }

        setTasks(prevState =>  [...prevState, tarefas]);
        setTarefa('');
        
        setCriadas(criadas+1);
      
    }
    function handleAlterTask(task: string){
       
        const taskIndex = tasks.findIndex(object => {
            return object.tarefa === task;
         });

         console.log('index ',taskIndex) 
         console.log('tasks ',tasks) 
         const newToDoList = [...tasks];
         newToDoList[taskIndex].concluida = !newToDoList[taskIndex].concluida;

         if (newToDoList[taskIndex].concluida) {
            setConcluidas(concluidas+1)   
         }else
            setConcluidas(concluidas-1)
         setTasks(newToDoList);
         console.log('tasks 2 ',tasks) 
    
            

    }

    function handleTasksRemove(task: string, finalizada: Boolean){
        
        Alert.alert("Remover", `Remover a tarefa ${task}?`,[
            {
              text: 'Sim',
              onPress : () => {setTasks(prevState => prevState.filter(tarefas => tarefas.tarefa !== task));
                setCriadas(criadas-1);
                if (finalizada) {
                    setConcluidas(concluidas-1)    
                }     
            }
            },
            {
              text: 'Não',
              style: 'cancel'
            }
          ])
        
    
        
    }

    function renderTasks(item: typeof tarefas) {
        return (    
            <VStack alignItems="center" justifyContent="center" bg="gray.400" h="90" pl={5} pr={5} mb={2}  mr={4} ml={4} borderRadius={5} >
              
              <HStack >
                <VStack w="10%" h="full" alignItems="center" justifyContent="center" >
                {
                 item.concluida ?    
                <IconButton
                    icon={ <CheckCircle size={26} color="#5E60CE" />}
                    onPress={() => handleAlterTask(item.tarefa)}
                  />   
                  :
                  <IconButton
                  icon={ <Circle size={26} color={colors.gray[300]} />}
                  onPress={() => handleAlterTask(item.tarefa)}
                />     
                }
                </VStack>
                <VStack w="80%" h="full" pl={5} justifyContent="center">
                  {item.concluida ? <Text strikeThrough color="white" fontSize={18} >{item.tarefa}</Text> :
                    <Text color="white" fontSize={18} fontWeight="" >{item.tarefa}</Text>   
                  }
                  
                </VStack>
                <VStack w="10%" h="full" alignItems="center" justifyContent="center">
                  <IconButton
                    icon={ <Trash size={26} color={colors.gray[300]} />}
                    onPress={() => handleTasksRemove(item.tarefa, item.concluida)}
                  />   
                </VStack>
                
                
              </HStack>
              
               
            </VStack>
          );
    }

    return ( 
        <View>
        <View h="full"  bg="gray.600">
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
                        <Input  
                        placeholder='Adicione uma nova tarefa'
                        onChangeText={setTarefa}
                        value={tarefa}
                        />
                    </VStack>

                    <VStack w="15%" ml="2" borderRadius={5} alignItems="center" bg="produto.blue_dark" justifyContent="center">
                        
                        <IconButton
                            icon={ <PlusCircle size={26} color={colors.gray[100]} />}
                            onPress={handleTasksAdd}
                        />                  
                    </VStack>                                   
                </HStack>
            </VStack>

            <VStack w="full" bg="gray.600" pb="5" pl="4" pr="4" >
                <HStack justifyContent="space-between" pb="5" borderBottomWidth={1} borderBottomColor="gray.400">
                    <HStack justifyContent="space-between" alignItems="center">
                        <Text color="produto.blue" fontSize="md" fontStyle="body" fontWeight="bold">Criadas </Text>
                        <Text bg="gray.400" pl="2" pr="2" borderRadius={15} color="white" fontStyle="body" fontWeight="bold">{criadas}</Text>    
                    </HStack> 
                    <HStack justifyContent="space-between" alignItems="center">
                        <Text color="produto.purple" fontSize="md" fontStyle="body" fontWeight="bold">Concluídas </Text>
                        <Text bg="gray.400" pl="2" pr="2" borderRadius={15} color="white" fontStyle="body" fontWeight="bold">{concluidas}</Text>    
                    </HStack>    
                    
                </HStack>             
            </VStack>

            <ScrollView >
                
                <FlatList
                    data={tasks}
                    //renderItem={({item}) => renderTasks(item) }
                    renderItem={({item}) => renderTasks(item) }
                    keyExtractor={(item) => item.tarefa}
                    extraData={tasks}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                    showsHorizontalScrollIndicator={true}
                /> 
            </ScrollView>
           
        </View>
        </View> 
    );
}