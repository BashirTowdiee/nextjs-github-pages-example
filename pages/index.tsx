/* eslint-disable react-hooks/exhaustive-deps */
// pages/index.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/apps');
  }, []);

  return null;
};

export default Home;
