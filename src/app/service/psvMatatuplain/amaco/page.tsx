import Link from "next/link";

const Amaco = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex justify-between items-center flex-wrap">
          <p className="text-lg font-semibold uppercase dark:text-gray-900">
            amaco annual third party psv plain matatu
          </p>
          <Link href={"/service/psvMatatuplain"}>
            <span className="material-symbols-outlined p-2 rounded-full border-2 border-[#007A37] dark:text-gray-900">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-3 gap-4 sm:gap-16 place-items-center">
          <div className="font-bold dark:text-gray-900">Seaters</div>
          <div className="font-bold dark:text-gray-900">
            Insurance cost(Ksh)
          </div>
          <div className="font-bold dark:text-gray-900">Action</div>

          <div className="dark:text-gray-900">14 Seats</div>
          <div className="dark:text-gray-900">14, 500</div>
          <Link href={"/service/psvMatatuplain/amaco/1"}>
            <div className="bg-[#007A37] text-white text-xs sm:text-base px-4 py-4 sm:px-4 sm:py-2 uppercase rounded-md">
              select
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Amaco;
