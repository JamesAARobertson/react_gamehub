// import { useState } from "react";


// function App() {
//   const [tags, setTags] = useState(['happy', 'cheerful'])
  
//   const handleClick = () => {
//     // add
//     setTags([...tags, "joyous"])
//     // remove
//     setTags(tags.filter(tag => tag !== 'happy'))
//     // update
//     setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;






// import { useState } from "react";


// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: 'Bug 1', fixed: false},
//     { id: 2, title: 'Bug 2', fixed: false}
//   ])
  
//   const handleClick = () => {
//     setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true} : bug))
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;