export default function Checkout() {
  return (
    <>
      <p>
        Total Amount: <span>$89.95</span>
      </p>
      <form
        method="dialog"
        className="[&_input]:max-w-sm [&_input]:p-1 [&_input]:pl-2 [&_input]:rounded-sm [&_input]:focus:outline-amber-400 [&_label]:font-bold [&_input]:bg-amber-200/60 [&_input]:shadow-sm [&_input]:invalid:outline-red-500 flex flex-col gap-2 w-full"
      >
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          autoComplete="off"
          required
        />

        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          required
        />

        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          id="street"
          autoComplete="off"
          required
        />

        <div className="flex gap-5 w-full max-w-[27em]">
          <div className="w-1/2 min-w-0">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              autoComplete="off"
              required
              className="w-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="off"
              required
              className="w-full"
            />
          </div>
        </div>
      </form>
    </>
  );
}
