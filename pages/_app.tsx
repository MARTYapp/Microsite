import type { AppProps } from "next/app";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useRouter } from "next/router";
import { LanguageProvider } from "@/lib/i18n";
import LangToggle from "@/components/LangToggle";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <LanguageProvider>
      <LayoutGroup>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
      <LangToggle />
    </LanguageProvider>
  );
}
