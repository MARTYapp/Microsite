import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { createClient } from '@supabase/supabase-js';
import '../styles/globals.css';

import { useUser } from '@hooks/useUser';
import type { AppProps } from 'next/app';

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, '');
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl?.startsWith('https://') || !supabaseAnonKey) {
  throw new Error(
    '❌ Invalid Supabase credentials: Check NEXT_PUBLIC_SUPABASE_URL and ANON_KEY in your .env.local file.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const userContext = useUser();

  // Optional loading fallback
  if (!userContext) {
    return <div className="text-white p-4">Loading...</div>;
  }

  const { setUser } = userContext;

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (data?.session) {
        setUser(data.session.user);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <ThemeProvider attribute="class">
      <AnimatePresence mode="wait">
        <motion.div key={router.route} initial="initial" animate="animate" exit="exit">
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}