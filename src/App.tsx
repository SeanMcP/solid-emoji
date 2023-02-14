import type { Component } from 'solid-js';
import Emoji from './Emoji';

const App: Component = () => {
  return (
    <div>
      <Emoji label="Hello" symbol="👋" /> Solid! <Emoji symbol="🧊" />
    </div>
  );
};

export default App;
