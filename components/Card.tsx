import {useState,useEffect} from 'react'
import moment from "moment"
import { Card,Flex, Image,Box,Text,Icon,Button, CardBody, CardFooter, useAccordionItemState } from '@chakra-ui/react'
// import {theme} from "./Buttons"
import {AiFillHeart} from "react-icons/ai"

const CardItem = ({items}:any)=>{

    const [isFav,setIsFav] = useState(false)
    // const deadline = Date.UTC(2022,11,31,0)

    const calculateTimeLeft = () => {
        var now = moment(new Date());
        var endTime = moment(items?.endTime);
        var duration = moment.duration(endTime.diff(now));
        let interval = 1000;
        if (duration.asSeconds() <= 0) {
            clearInterval(interval);
        }
        duration = moment.duration(duration.asSeconds() - 1, 'seconds');
        return(duration);
    }

    const [timeLeft, setTimeLeft]:any = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        },1000);
    },[timeLeft]);
   
    
    
    return <Card bg='#0b2237' m={2} maxW='sm'>
                <CardBody>
                    <Flex my={4} justifyContent={'space-between'}>
                        <Button variant={'hot'} size='sm'>Hot deal</Button>
                        
                        {!items?.isSale?  <Button size={'sm'} variant='auc'>Auction</Button>:<Button size={'sm'} variant='sale'> Sale</Button>}
                    </Flex>    
                    <Image
                      height={'300px'}
                      width={'300px'}
                      src={items.url}
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                     <Flex my={4} justifyContent="space-between"><Flex flexDirection={'column'}><Text color={'#aaa'} fontSize={'md'}>{items?.idNumber}</Text><Text fontSize={'xs'} color='blue.200'>{items?.name}</Text></Flex><Flex justifyContent={'center'} alignItems="flex-start" gap={'10px'}><Icon w={8} h={8} pt={1} onClick={()=> setIsFav(!isFav)} cursor='pointer' color={isFav?'pink.600':'gray'} as={AiFillHeart}/><Text color={'whiteAlpha.400'} pt={1}>{92}</Text></Flex></Flex>
                     <Flex justifyContent={'space-between'}>  
                        <Box border={'1px solid blue'} py={1} px={2} color={'white'}><Text mb={1} fontSize={'md'}>Highest Bid</Text><Text fontSize={'sm'}>{'$262'}</Text></Box>
                        {timeLeft && <Box border={'1px solid purple'} py={1} px={2} color={'white'}><Text mb={1} fontSize={'md'}>Auction ends in</Text><Text fontSize={'sm'}>{timeLeft.days()+':'+timeLeft.hours() +':'+timeLeft.minutes()+":"+timeLeft.seconds()}</Text></Box>}
                     </Flex>
                </CardBody>
                <CardFooter>
                    
                    <Button fontSize={'large'} width={'100%'} >Bid Now</Button>
                    
                </CardFooter>
            </Card>
}


export default CardItem;