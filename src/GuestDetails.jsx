import { useGuests } from "./Context";

//define the default GuestDetails component and extract properties from the hook
//render the specific info card for the selected guest displaying name, email, phone, job, and bio
//render a back button underneath the details that updates page state back to list when clicked
export default function GuestDetails() {
  const { selectedGuest, setPage } = useGuests();

  return (
    <main className="guest-container">
      <div className="guest-details-card">
        <h2>{selectedGuest.name}</h2>
        <div className="details-body">
          <p>Email: {selectedGuest.email}</p>
          <p>Phone: {selectedGuest.phone}</p>
          <p>Job: {selectedGuest.job}</p>
          <p>Bio: {selectedGuest.bio}</p>
        </div>
        <button className="back-btn" onClick={() => setPage("LIST")}>
          Back
        </button>
      </div>
    </main>
  );
}
