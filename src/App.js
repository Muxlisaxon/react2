import react, { useState } from 'react';
import "./App.css";
export default function App() {
  const [count, setCount] = useState(0)
  if (count > 20) {
    setCount  (20)
  } else if (count < 0) {
    setCount  (0)
  }
  
  return (
    <>
      <center>
        <div className='all'>
<div className='text'>
<h1>{count} </h1>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>dencrement</button>
</div>
       

        </div>
        
      </center>

    </>
  )
}
// function App() {
//   return (

// function App() {
//   return (
//     <div style={{ margin: '100px' }}>
//       <img src="file:///C:/Users/Admin/Downloads/photo_2023-06-07_18-25-09-removebg-preview.png" alt="react logo" style={{ width: '400px', }}/>
//     </div>
//   );
// }























