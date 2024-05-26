import React, { Fragment, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { Outlet, redirect, useNavigate, useNavigation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faCircleLeft, faForward, faPause, faPauseCircle, faPlusCircle, faRepeat, faShuffle, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

function App(): ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  const accessToken = useSelector((k: RootState) => k.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      if (window.location?.hash?.includes('access_token=')) {
        const hash = window.location.hash?.substring(1);
        navigate(`/home`);
        dispatch({ type: 'SET_ACCESS_TOKEN', payload: { accessToken: hash?.split?.('&')?.[0]?.split('=')?.[1] } });
      } else {
        console.debug(`NO access token found [${new Date().toString()}]`);
        // navigate('/login');
      }
    }
  }, [])

  return (
    <div className='flex flex-col' style={{ height: '98vh', width: '100%', overflow: 'hidden' }}>
      <div id='app-outlet' className='flex-1' style={{ height: 'calc(100% - 200px)' }}>
        <Outlet />
      </div>
      <div id='player' className='flex justify-between items-center w-full' style={{ height: '100px' }}>
        <div className='flex justify-between items-center' style={{ minWidth: '25%' }}>
          <div className='flex items-center'>
            <div className='mr-3'>
              <img src='https://marketplace.canva.com/EAEdfw3xPPc/1/0/1600w/canva-pink-sunset-tumblr-aesthetic-love-songs-playlist-cover-IeYIUu1iRHQ.jpg' height={50} width={50} className='' style={{ borderRadius: 4 }} />
            </div>
            <div className='flex flex-col text-white'>
              <div>Song name</div>
              <div>Singers go here</div>
            </div>
          </div>
          <FontAwesomeIcon icon={faPlusCircle} className='transition-colors hover:text-white cursor-pointer' />
        </div>
        <div className='flex-1 flex items-center ml-3 mr-3' style={{ width: '50%', }}>
          <div className='flex flex-col items-center justify-center ml-3 mr-3' style={{ width: '100%' }}>
            <div className='flex items-center mb-2'>
              <FontAwesomeIcon icon={faShuffle} className='cursor-pointer hover:text-white ml-3 mr-3' style={{fontSize: '20px'}} />
              <FontAwesomeIcon icon={faBackward} className='cursor-pointer hover:text-white ml-3 mr-3' style={{fontSize: '20px'}} />
              <FontAwesomeIcon icon={faPauseCircle} className='cursor-pointer hover:text-white ml-3 mr-3' style={{fontSize: '30px'}} />
              <FontAwesomeIcon icon={faForward} className='cursor-pointer hover:text-white ml-3 mr-3' style={{fontSize: '20px'}} />
              <FontAwesomeIcon icon={faRepeat} className='cursor-pointer hover:text-white ml-3 mr-3' style={{fontSize: '20px'}} />
            </div>
            <div className='flex items-center w-full'>
              <div className='mr-3' style={{ fontSize: '12px' }}>1:01</div>
              <input type='range' className='cursor-pointer' min={1} max={300} step={1} defaultValue={200} style={{ accentColor: 'white', width: '100%' }} />
              <div className='ml-3' style={{ fontSize: '12px' }}>3:00</div>
            </div>
          </div>
        </div>
        <div className='flex items-baseline justify-end' style={{ width: '20%' }}>
          <div className='mr-2 cursor-pointer'>
            <FontAwesomeIcon icon={faVolumeHigh} className='hover:text-white transition-colors' />
          </div>
          <input type='range' min={0} max={100} step={1} defaultValue={100} style={{ borderRadius: '4px', accentColor: 'white' }} />
        </div>
      </div>
    </div>
  );
}

export default App;
