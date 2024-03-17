import Image from "next/image";

export default function Services() {
  return (
    <section className="absolute  flex flex-wrap justify-center items-center  -mt-20  gap-4">
      <div className="pb-20  md:w-1/3 p-5  space-y-5 bg-white shadow-md hover:shadow-lg transition duration-300">
        <Image
          src="/c.png"
          width={50}
          height={50}
          alt="logo1"
          className="mt-3"
        ></Image>
        <h2 className="text-xl font-semibold ">Fuel Delivery</h2>

        <p className="text-gray-700">
          Keep your building heated and your machines running with our fuel
          delivery.
        </p>
      </div>
      <div className="pb-20  md:w-1/3 p-5 space-y-5 bg-red-700 text-white shadow-md hover:shadow-lg transition duration-300">
        <Image
          src="/b.png"
          width={50}
          height={50}
          alt="logo2"
          className="mt-3"
        ></Image>

        <h2 className="text-xl font-semibold ">Tank Inspections</h2>

        <p className="">
          Fuel tanks should undergo yearly inspections for leaks and damage.{" "}
        </p>
      </div>
      <div className=" pb-20 md:w-1/3 p-5  space-y-5 bg-white shadow-md hover:shadow-lg transition duration-300">
        <Image
          src="/a.png"
          width={50}
          height={50}
          alt="logo3"
          className="mt-3"
        ></Image>

        <h2 className="text-xl font-semibold">Tank Rentals & Sale</h2>

        <p className="text-gray-700">
          We rent and sell fuel tanks in a wide range of sizes for your
          convenience.
        </p>
      </div>
    </section>
  );
}
