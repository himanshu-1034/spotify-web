import React, { Fragment, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { Outlet, redirect, useNavigate, useNavigation } from 'react-router-dom';

function App(): ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  const accessToken = useSelector((k: RootState) => k.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location?.hash?.includes('access_token=')) {
      const hash = window.location.hash?.substring(1);
      dispatch({ type: 'SET_ACCESS_TOKEN', payload: { accessToken: hash?.split?.('&')?.[0]?.split('=')?.[1] } });
    } else {
      console.debug(`NO access token found [${new Date().toString()}]`);
      navigate('/login');
    }
  }, [])

  return (
    <div className='flex flex-col' style={{ height: '98vh', width: '100%', overflow: 'hidden' }}>
      <div id='app-outlet' className='flex-1'>
        <Outlet />
      </div>
      <div id='player'>
        Player
      </div>
    </div>
  );
}

export default App;
