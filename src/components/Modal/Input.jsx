export default function Input({ label, id, ...rest }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required autoComplete="off" {...rest} />
    </>
  );
}
