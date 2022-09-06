import { useEffect } from 'react';
import { isAuthenticated } from '../utils/auth';
import { useNavigate, useLocation } from 'react-router-dom';

function Protect(props) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated() && location.pathname.match(/profile/ig))
      navigate('/auth-form');

  }, []);

  return (
    <>
      {props.children}
    </>
  )
}

export default Protect;