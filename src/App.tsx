import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [componentNumber, setcomponentNumber] = useState<number>(0)
  return (
    <div>
      <h1>Bootstrap testing</h1>
      <p>testing state: {componentNumber}</p>
      <Button onClick={() => setcomponentNumber(componentNumber + 1)}>click me</Button>
    </div>
  );
}

export default App;
