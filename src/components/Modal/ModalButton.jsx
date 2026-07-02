export default function ModalButton({ children, textOnly, ...rest }) {
  return (
    <button
      className={`cursor-pointer font-medium hover:opacity-80 ${!textOnly ? "ml-3 bg-linear-to-r from-amber-400/80 to-amber-300 py-1 px-5 rounded-sm shadow-sm active:opacity-100 disabled:opacity-60 disabled:cursor-not-allowed" : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
