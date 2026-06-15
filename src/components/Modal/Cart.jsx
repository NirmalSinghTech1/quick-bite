export default function Cart() {
  return (
    <>
      <ul className="font-medium [&>li]:flex [&>li]:items-center [&>li]:justify-between [&>li]:mb-1 [&>li>div>span]:not-nth-2:bg-amber-800 [&>li>div>span]:not-nth-2:rounded-full [&>li>div>span]:not-nth-2:text-amber-200 [&>li>div>span]:not-nth-2:text-lg [&>li>div]:w-20 [&>li>div]:flex [&>li>div]:text-center [&>li>div>span]:flex-1 [&>li>div>span]:cursor-pointer">
        <li>
          <p>Seafood Paella - 1 x $19.99</p>
          <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </li>
        <li>
          <p>Seafood Paella - 1 x $19.99</p>
          <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </li>
        <li>
          <p>Seafood Paella - 1 x $19.99</p>
          <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </li>
      </ul>
      <p className="self-end font-semibold">$53.97</p>
    </>
  );
}
