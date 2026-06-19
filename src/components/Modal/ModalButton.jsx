export default function ModalButton({ text, ...rest }) {
  return (
    <button {...rest} className="ml-3 bg-linear-to-r from-amber-400/80 to-amber-300 py-1 px-5 rounded-sm shadow-sm cursor-pointer hover:opacity-80 active:opacity-100 font-medium disabled:opacity-60 disabled:cursor-not-allowed ">
      {text}
    </button>
  );
}
