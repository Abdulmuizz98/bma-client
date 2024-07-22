import { useState } from "react";
import {
  BmAirtime,
  BmNaira,
  BmPhone,
  BmEdit,
  BmTrash,
  BmData,
} from "../components/Icon";

interface CartItem {
  category: string; // This will determine icons
  item: string;
  phone: string;
  amount: number;
  plan?: string;
}

export default function Checkout() {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <>
      <main>
        <div className="w-full max-w-[390px] p-[15px] m-auto  border border-black xl:flex xl:flex-row  xl:max-w-[1280px] gap-10">
          <div className=" xl:basis-1/2 border border-black">
            <h2 className="text-[18px] pb-2 font-bold text-offblack xl:text-[20px]">
              Checkout *{" "}
            </h2>
            <p className="text-midgray text-[14px] xl:text-[16px]">
              Kindly review to confirm details.
            </p>
            <div>
              <h3 className="text-[16px] font-medium xl:text-[18px] xl:font-bold">
                Your cart
              </h3>
            </div>
            <div className="">
              <div className="flex flex-row gap-5 p-[14px] border border-black">
                <span className="">
                  <BmAirtime />
                </span>
                <div className="basis-3/5">
                  <p>MTN Airtime</p>
                  <p className="flex gap-x-4">
                    <span className="flex items-center gap-x-2">
                      <BmPhone />
                      <span>000 0000 000</span>
                    </span>
                    <span className="flex item-center gap-x-1">
                      <BmNaira />
                      <span>N1000</span>
                    </span>
                  </p>
                </div>
                <div className="flex justify-end items-center gap-x-3 ">
                  <BmTrash />
                  <BmEdit />
                </div>
              </div>
            </div>
          </div>
          <div className=" xl:basis-1/2"></div>
        </div>
      </main>
    </>
  );
}
