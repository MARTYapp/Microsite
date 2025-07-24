import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { UserProvider, useUser } from '@/hooks/useUser';
import { supabase } from '@/lib/supabase';
import { AnimatePresence, motion } from 'framer-motion';

function InnerApp({ Component, pageProps, router }: AppProps) {
  const { setUser } = useUser();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    // Initial check on load
    supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user || null);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [setUser]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default function MyApp(props: AppProps) {
  return (
    <UserProvider>
      <InnerApp {...props} />
    </UserProvider>
  );
}