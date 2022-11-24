
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import {ThemeContextProvider} from './components/context/ThemeContext'
import {Box} from './components/context/Box'
import {UserContextProvider} from './components/context/UserContext'
import {User} from './components/context/User'
import { MutableRef } from './components/ref/MutableRef';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restrictions/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';
function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    }
  ]
  return (
    <div className="App">
      <UserContextProvider>
        <ThemeContextProvider>
          <Text as='h1' size={'lg'}>Heading</Text>
          <Text as='p' size={'md'}>Paragraph</Text>
          <Text as='label' htmlFor="someId" size={'sm'} color={'secondary'}>Label</Text>
    {/* <Toast position="center" /> */}
    {/* <RandomNumber value={10} isPositive /> */}
    {/* <Greet name="CheeHoe" messageCount={20} isLoggedIn={false}/>
     <Person name={personName} />
     <PersonList names={nameList} />
     <Status  status="loading"/>
     <Heading>Placeholder text</Heading>
     <Oscar>
      <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
     </Oscar>
     <Greet name="CheeHoe" isLoggedIn={true}/>
     <Button handleClick={(event,id)=>console.log('clicked button',event,id)}/>
     <Input value="" handleChange={event=>console.log(event)}/>
     <Container style={{border: '1px solid black', padding: '1rem', backgroundColor: 'red'}}/> */}
        {/* <Box></Box> */}
        </ThemeContextProvider>
      </UserContextProvider>
   
    </div>
  );
}

export default App;
