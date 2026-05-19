import { GuestList } from "./GuestList";
import { GuestDetails } from "./GuestDetails";
import { useGuests } from "./Context";

//implement conditional if statements to check the page state value
//render the GuestList component if the page matches list
//render the GuestDetails component if the page matches details

export default function App() {
  const { page } = useGuests();

  if (page === "LIST") {
    return <GuestList />;
  }

  if (page === "DETAILS") {
    return <GuestDetails />;
  }
}
