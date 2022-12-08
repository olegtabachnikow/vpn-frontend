import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const LocationProvider = ({ children }) => {
  const currentUser = useSelector((state) => state.currentUser);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!Object.keys(currentUser).length) {
      return;
    } else {
      if (!currentUser.activeUser) {
        navigate('/intro');
      } else if (currentUser.activeUser) {
        const currentLocation = Cookies.get('location_app');
        if (currentLocation === '/payment') {
          navigate('/');
          return;
        }
        if (!currentLocation) {
          navigate('/');
          return;
        } else navigate(currentLocation);
      }
    }
  }, []);

  React.useEffect(() => {
    window.onbeforeunload = (e) => {
      e.preventDefault();
      const tenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000);
      Cookies.set('location_app', location.pathname, {
        expires: tenMinutes,
      });
    };
  }, [location]);

  return <>{children}</>;
};

export default LocationProvider;
