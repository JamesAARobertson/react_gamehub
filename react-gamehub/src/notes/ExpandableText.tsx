import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;


// /////////////////////App

import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit
        inventore sed. Vitae molestiae blanditiis qui accusamus, quos explicabo
        quo numquam laudantium. Voluptatibus doloremque natus nemo reiciendis
        cum corporis atque modi voluptatem velit, nisi quam, veritatis sit error
        dolores eaque neque magni et. Facere deserunt soluta animi rem fuga
        consectetur vel, nesciunt, voluptatibus quos iure minus sed vitae quasi
        modi id, quis eius labore adipisci sint temporibus distinctio earum
        libero? Ratione quaerat quasi, iste dolores, voluptatem dolorem autem
        consequatur quod qui repudiandae officia optio odit blanditiis ullam
        ducimus officiis nobis aliquam distinctio dignissimos saepe quidem
        deleniti! Id nostrum ipsam minus.
      </ExpandableText>
    </div>
  );
}

export default App;