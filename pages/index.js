import { useRouter } from 'next/dist/client/router';
import { useLayoutEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useLayoutEffect(() => {
    router.replace('/search');
  }, []);

  return null;
}
