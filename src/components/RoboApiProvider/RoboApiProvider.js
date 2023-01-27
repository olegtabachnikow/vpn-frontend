import React from 'react';
import {
  setCurrentUser,
  setPrices,
  setCurrentCountry,
  setRedirect,
} from '../../redux/actions/actions';
import { getCurrentUser, getPrices } from '../../utils/roboApi';
import { useNavigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function RoboApiProvider({ children }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const userId = () => {
    const data = queryParams.get('user_id');
    if (data) {
      return parseInt(data.replace('/', ''));
    }
  };

  const getNavPage = () => queryParams.get('path');

  function getUser(id = 64190794) {
    const navPage = getNavPage();
    getCurrentUser(id)
      .then((res) => {
        setCurrentUser(res);
        setCurrentCountry(res.domainId);
        setIsLoading(false);
        if (!res.activeUser) {
          navigate('/intro');
        } else {
          if (navPage) {
            navigate(navPage);
            setRedirect(true);
          } else navigate('/');
        }
        console.log(res);
      })
      .catch(() => {
        setIsLoading(false);
        navigate('/error');
      });
  }

  React.useEffect(() => {
    getUser(userId());
  }, []);

  React.useEffect(() => {
    getPrices()
      .then((res) => setPrices(res))
      .catch((err) => {
        navigate('/error');
      });
  }, []);

  return <>{!isLoading ? children : <Preloader />}</>;
}

export default RoboApiProvider;
