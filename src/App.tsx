import React, { Fragment, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';

function App(): ReactElement {

  return (
    <div className='flex flex-col' style={{height: '98vh', width: '98vw', overflow: 'hidden'}}>
      <div className='flex-1 h-full overflow-x-hidden overflow-y-auto'>
        
      </div>
      <div style={{width: '100%'}} className='p-4'>
        
      </div>
    </div>
  );
}

export default App;
