import React from 'react';
import Header from './component/Header';
import Form from './component/Form';
import Timeline from './component/Timeline';
import { AppProvider } from './context';

function App() {

  return (
    <AppProvider>
      <div className="App">
        <Header />
        <div className="grid-wrapper">
        <Form />
        <Timeline />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
