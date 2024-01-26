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



// /////////////////// USING  Immer 


// import { useState } from "react";
// import produce from "immer";


// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: 'Bug 1', fixed: false},
//     { id: 2, title: 'Bug 2', fixed: false}
//   ])
  
//   const handleClick = () => {
//     // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true} : bug))

//     setBugs(produce(draft => {
//      const bug =  draft.find(bug => bug.id === 1)
//      if (bug) bug.fixed = true;
//     }))
//   };

//   return (
//     <div>
//       {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'} </p>)}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;