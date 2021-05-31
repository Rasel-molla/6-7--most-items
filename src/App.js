import logo from './logo.svg';
import './App.css';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import MealDetail from './components/mealDetail/MealDetail';
import Mealfinder from './components/MealFinder/Mealfinder';
function App() {
const [likeColor,setLikeColor] = useState ('');

const handelLike = () => {
  const color = likeColor ? '' : 'primary';
  setLikeColor(color); 
}
const [users,setUsers] = useState([]);

// Object {}
const [singleUser,setSingleUser] = useState({});

const [randomUser,setRandomUser] = useState ({});
 
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))

  // singleUser
  fetch('https://jsonplaceholder.typicode.com/users/1 ')
  .then(res => res.json())
  .then( data => setSingleUser(data) )

  // randomUser
  fetch('https://randomuser.me/api')
.then(res =>res.json())
. then(data => setRandomUser(data.results[0]))
},[])

  return (
    <div className="App">

<Mealfinder></Mealfinder>
<hr/>
      <MealDetail></MealDetail>
  
      {/* <header className="App-header"> */}
       
       <AccessAlarm onClick={handelLike} color={likeColor}></AccessAlarm>
       <ThreeDRotation >   </ThreeDRotation>
      {/* </header> */}

      <hr/>
 <h1>Name:{singleUser.name}</h1>
 {/* <h2>Random Gender : {randomUser.name && randomUser.name.first}</h2>  */}


 <h3>Random Gender : {randomUser.name?.first}</h3> 
      {
        users.map(user => <h3>{user.name}</h3>)
      }
    </div>
  );
}

export default App;
