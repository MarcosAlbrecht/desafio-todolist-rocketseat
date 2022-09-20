import React, { useState } from 'react';

import { Input } from '../../components/Input';
import { CardTasks } from '../../components/CardTasks';

import { Heading, HStack, IconButton, Text, useTheme, VStack, FlatList, Checkbox } from 'native-base';
import { Rocket, PlusCircle, Trash} from 'phosphor-react-native';
import { Alert  } from 'react-native';

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
    function handleAlterTask(tas: string){
       
            //console.log(tas);    
            //tasks.forEach(element => {
            //    console.log(element.tarefa)    
            //});
            const taskIndex = tasks.map(object => object.tarefa).indexOf(tas);
            console.log('index ',taskIndex) 
            let newTasks = tasks;
            newTasks[taskIndex].concluida = !newTasks[taskIndex].concluida;
            setTasks(newTasks);
            //console.log('index ', {taskIndex})
            setTasks(prevState => prevState.filter(tarefas => tarefas.tarefa !== tas))       
            

    }

    function handleTasksRemove(task: string){
        
    
        Alert.alert("Remover", `Remover a tarefa ${tarefa}?`,[
            {
              text: 'Sim',
              onPress : () => setTasks(prevState => prevState.filter(tarefas => tarefas.tarefa !== task))
            },
            {
              text: 'Não',
              style: 'cancel'
            }
          ])
        
            setCriadas(criadas-1);
        
    }

    function renderTasks(item: typeof tarefas) {
        return (    
            <VStack alignItems="center" justifyContent="center" bg="gray.400" h="90" w="full" pl={5} pr={5} mb={2} borderRadius={5} >
              
              <HStack >
                <VStack w="10%" h="full" alignItems="center" justifyContent="center" >
                <Checkbox accessibilityLabel='Input' bg="gray.400" 
                    borderRadius={20} borderColor="produto.purple" 
                    isChecked={item.concluida} size="lg" 
                    colorScheme="purple"
                    onChange={() => handleAlterTask(item.tarefa)}  />   
                     
         
                </VStack>
                <VStack w="80%" h="full" pl={5} justifyContent="center">
                  {concluida ? <Text strikeThrough color="white" fontSize={18} fontWeight="" >{tarefa}</Text> :
                    <Text color="white" fontSize={18} fontWeight="" >{item.tarefa}</Text>   
                  }
                  
                </VStack>
                <VStack w="10%" h="full" alignItems="center" justifyContent="center">
                  <IconButton
                    icon={ <Trash size={26} color={colors.gray[300]} />}
                    onPress={() => handleTasksRemove(item.tarefa)}
                  />   
                </VStack>
                
                
              </HStack>
              
               
            </VStack>
          );
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
                        <Text bg="gray.400" pl="2" pr="2" borderRadius={15} color="white" fontStyle="body" fontWeight="bold">2</Text>    
                    </HStack> 
                    <HStack justifyContent="space-between" alignItems="center">
                        <Text color="produto.purple" fontSize="md" fontStyle="body" fontWeight="bold">Concluídas </Text>
                        <Text bg="gray.400" pl="2" pr="2" borderRadius={15} color="white" fontStyle="body" fontWeight="bold">5</Text>    
                    </HStack>    
                    
                </HStack>             
            </VStack>

            <VStack alignItems="center">
                {/* <Text color="white">texto3</Text>
                <Text color="white">{tasks.length > 0 ? tasks[0].tarefa : 'vazio'}</Text>
                {console.log('tamanho', tasks)}
                { tasks.length > 0 ? tasks.map((tar, index) => (
                    <Text color="white">texto3</Text>   
                )) : <Text color="white">lista vazia</Text>
                } */
                console.log(tasks)
                //console.log('taskIndex ',taskIndex)
                }
                <FlatList
                    data={tasks}
                    //renderItem={({item}) => renderTasks(item) }
                    renderItem={({item}) => renderTasks(item) }
                    keyExtractor={(item) => item.tarefa}
                    extraData={tasks}
                /> 
            </VStack>
           
        </VStack>
    );
}