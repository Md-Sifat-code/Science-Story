import React, { createContext, useContext, useEffect, useState } from "react";

// Create Context
const UserContext = createContext();

// Custom hook for easy access
export const useUser = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // holds full user object
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUsername = localStorage.getItem("username");
        console.log("Stored username:", storedUsername);
        if (!storedUsername) {
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://biggangolpo.onrender.com/User/search/${storedUsername}`
        );
        const data = await response.json();
        console.log("Fetched user data:", data);

        // ✅ FIX: Use the first object in the array
        if (Array.isArray(data) && data.length > 0) {
          setUser(data[0]);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
