// hooks/useUser.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { supabase } from "@/lib/supabase";

// Type definition for the context
type UserContextType = {
  user: any;
  setUser: (user: any) => void;
};

// Create the actual context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider to wrap the app
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch current session on mount
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        setUser(data.session.user);
      }
    });

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook to consume context
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("❌ useUser must be used within a UserProvider");
  }
  return context;
}
