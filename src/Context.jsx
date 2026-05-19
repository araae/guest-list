//import useState, useContext, createContext, useEffect from react
import { useState, useContext, createContext, useEffect } from "react";

//create a GuestContext to store the shared data
const GuestContext = createContext();

//define GuestProvider function component to bundle the application and provide state
//initialize page, guests, and selectedGuest states using useState hooks
//use useEffect to fetch the initial list of guests from the API endpoint
//use useEffect to fetch specific guest details whenever the selectedGuestId changes
//assign all states and functions to a single value object
//return the GuestContext Provider component with the value object for all child components
//define a custom hook function named useGuests to extract the context data
//implement an if statement to throw an error if useGuests is used outside the Provider
export function GuestProvider({ children }) {
  const [page, setPage] = useState("LIST");
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState();

  useEffect(() => {
    async function loadGuests() {
      try {
        const response = await fetch(
          "https://fsa-crud-2aa9294fe819.herokuapp.com/api/araae/guests",
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setGuests(data.data || []);
      } catch (error) {
        console.error("Error fetching guests:", error);
      }
    }
    loadGuests();
  }, []);

  const value = {
    page,
    setPage,
    guests,
    selectedGuest,
    setSelectedGuest,
  };

  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
}

export function useGuests() {
  const value = useContext(GuestContext);
  if (!value) {
    throw Error("useGuests must be used inside GuestProvider");
  }
  return value;
}
