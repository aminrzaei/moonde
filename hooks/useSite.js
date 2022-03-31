import { useContext } from 'react';
import SiteContext from '../contexts/SiteContext';

const useSite = () => {
  return useContext(SiteContext);
};

export default useSite;
