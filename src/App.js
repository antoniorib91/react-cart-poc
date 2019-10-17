import React from 'react';
import HeaderComponet from './components/header/header.component';
import ContainerComponent from './components/container/container.component';

const template  = (
  <div className="App">
    <HeaderComponet></HeaderComponet>
    <ContainerComponent></ContainerComponent>
  </div>
);

function App() {
  return template;
}

export default App;
