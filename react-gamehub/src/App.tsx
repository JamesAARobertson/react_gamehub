import { useState } from "react";


function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "James",
    },
  })
  
const handleClick = () => {
  setGame({ ...game, player: {...game.player, name: "Jam"}})

}

  return (
    <div>
    </div>
  );
}

export default App;
