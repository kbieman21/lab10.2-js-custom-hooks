// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import UsePagination from './components/UsePagination'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <UsePagination/>
//     </>
//   )
// }

// export default App


import "./App.css";
import UsePagination from './components/UsePagination'
import UseDebounceSearch from "./components/UseDebounceSearch";

function App() {
  

  return (
    <>
      <h1>Custom Hooks</h1>
      
      <UsePagination />
      <hr />
      <UseDebounceSearch/>

      
      
    </>
  );
}

export default App;
