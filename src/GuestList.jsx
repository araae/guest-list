import { useGuests } from "./Context";

//define the default GuestList component and extract properties from the hook
//render the main list container with a table layout for Name, Email, and Phone
//map over the guests array to render each guest row
//add an onClick to each row that updates selectedGuest and switches page state to details

export default function GuestList() {
  const { guests, setSelectedGuest, setPage } = useGuests();

  return (
    <main className="guest-container">
      <h1>Guest List</h1>
      <table className="guest-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr
              key={guest.id}
              className="guest-row"
              onClick={() => {
                setSelectedGuest(guest);
                setPage("DETAILS");
              }}
            >
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="instruction-text">Select a guest for more more details</p>
    </main>
  );
}
