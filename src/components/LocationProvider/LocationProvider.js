import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LocationProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const currentLocation = Cookies.get('location_app');
    if (!currentLocation) return;
    console.log(currentLocation, currentLocation === '/payment');
    if (currentLocation === '/payment') {
      navigate('/');
      return;
    }
    navigate(currentLocation);
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
