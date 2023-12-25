import Link from "next/link";

const Annual = () => {
  return (
    <>
      <div className="w-full flex-1 px-2 py-2 sm:px-24 sm:py-4">
        <div className="header w-full my-4 flex justify-between items-center flex-wrap">
          <p className="text-lg font-semibold uppercase dark:text-gray-900">
            annual psv matatu covers
          </p>
          <Link href={"/service/thirdPartyPsv"}>
            <span className="material-symbols-outlined p-2 rounded-full border-2 border-[#007A37] dark:text-gray-900">
              close
            </span>
          </Link>
        </div>
        <div className="opts w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <Link href={"/service/thirdPartyPsv/annual/amaco"}>
            <div className="py-2 uppercase text-white bg-[#007A37] grid place-items-center">
              amaco insurance
            </div>
          </Link>

          <Link href={"/service/thirdPartyPsv/annual/directline"}>
            <div className="py-2 uppercase text-white bg-[#E41313] grid place-items-center">
              directline insurance
            </div>
          </Link>

          <Link href={"/service/thirdPartyPsv/annual/xplico"}>
            <div className="py-2 uppercase text-white bg-[#000000] grid place-items-center">
              xplico insurance
            </div>
          </Link>

          <Link href={"/service/thirdPartyPsv/annual/invesco"}>
            <div className="py-2 uppercase text-white bg-[#007A37] grid place-items-center">
              Invesco insurance
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Annual;
