import { Center,Flex,Box } from '@chakra-ui/react'
// import { url } from 'inspector'
import CardItem from '../components/Card'

const IndexPage = () => {

  const data = [{
    id:'101',
    isSale:false,
    idNumber:'#B8/457843',
    name:'Enotch Citizen',
    reactions:'92',
    url:'./images/1.jpg',
    endTime:"2022-12-1"
    
  },
  {
    id:'102',
    isSale:false,
    idNumber:'#B8/457845',
    name:'Leo Messi',
    reactions:'32',
    url:'./images/2.webp',
    endTime:"2022-12-2"
  },
  {
    id:'103',
    isSale:true,
    idNumber:'#B8/457848',
    name:'Neymar Jr',
    reactions:'92',
    url:'./images/3.jpg',
    endTime:"2022-12-3"
  }
]

return (
  <Box height={'100%'} as={'section'} maxW={'100%'} bg='#0e1a28' color='white'>
    <Flex justifyContent={'center'} flexDirection={'row'} flexWrap={'wrap'}>
      {data.map((item)=> <CardItem key={item.id} items={item}/>)}
    </Flex>
  </Box>

)
}
export default IndexPage
