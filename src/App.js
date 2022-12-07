import React, {useEffect, useState } from 'react';
import './App.css';

//last try
const generateUsers = () => {
  let users = [ 'someone', 'someone1', 'someone2', 'someone3', 'someonehelpme'
  ];

 
  return users;

};


function App() {
  const [x, setX] = useState([]);
  useEffect(() => {
    setX(generateUsers());
  }, []);
  
 
  return (
    <>
    <ul>
    {x.map((a, b) => {
        return <li key={a}>{b}</li>;
      })}
    </ul>
    <button onClick={ihavenoidea}> This button should delete some users, but guess what</button>
     
    </>
  );
}










//garbage


// const generateUsers = ()=>{
// const users = ['someone', 'someone1', 'someone2', 'someone3'];
// // for(let item of Users){
// //   console.log(item.length);
// // }
// }

// const App=() => {
  
  
  
 

//   // } [x, setX]= useState(10);

//   //  const clickHandler = ()=>{
//   //   // setX(x+1);
//   //   setX((prevX)=> prevX-1)
//   //  }
    
  
//     return <div> 
//       {users}
     

//   {/* <h1> users left {x}  </h1>
//   <button onClick={clickHandler}>
//     Click me
//   </button> */}

//     </div>
// }

export default App;
