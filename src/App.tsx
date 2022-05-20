import { useState } from 'react'
import "./App.sass"

const Pixel = () => {
  const [active, setActive] = useState(false);
  return <span className={active ? "pixel active" : "pixel"} onClick={() => setActive(!active)} />;
}

const Row = () => {
  return (
    <div className="row">
        {Array(64).fill(0).map(() => (
            <Pixel />
        ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
        {Array(32).fill(0).map(() => (
            <Row />
        ))}
    </div>
  )
}