import React from 'react';
import FormBlock from "../blocks/form/FormBlock";
import {store} from "../store";

const App = () => {
  const { formBlockData } = store;

  return (
    <div>
      <FormBlock {...formBlockData} />
    </div>
  );
}

export default App;
