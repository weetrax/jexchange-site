import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

type StatsProps = {
  //
};

type Price = {
  rate: number;
  unit: string;
};

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const initalJexHolderState = 3300;

const Stats: React.FC<StatsProps> = () => {
  const [jexPrice, setJexPrice] = useState<Price | null>(null);
  const [jexHolders, setJexHolders] = useState<number>(initalJexHolderState);

  useEffect(() => {
    fetch("https://microservice.jexchange.io/prices/JEX-9040ca").then(
      async (response) => {
        const res = (await response.json()) as Price;
        const fix = (res.rate as number).toFixed(8);
        setJexPrice({ ...res, rate: parseFloat(fix) });
      }
    );

    fetch("https://api.elrond.com/tokens/JEX-9040ca/accounts/count").then(
      async (response) => {
        const res = await response.json();
        setJexHolders(res);
      }
    );
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-4 items-center justify-center text-center gap-12">
        <div className="col-span-2 md:col-span-1 p-3">
          <div className="">
            <div className="flex gap-2 flex-col ">
              <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                $203M+
              </div>
              <div className="text-sm tracking-tight">Trade Volume</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 p-3">
          <div className=" ">
            <div className="flex gap-2 flex-col">
              <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                {numberWithCommas(jexHolders)}+
              </div>
              <div className="text-sm tracking-tight">JEX Holders</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 p-3">
          <div className=" ">
            <div className="flex gap-2 flex-col">
              <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                {numberWithCommas(6477)}+
              </div>
              <div className="text-sm tracking-tight">Filled offers</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 p-3">
          <div className=" ">
            <div className="flex gap-2 flex-col">
              <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                17+
              </div>
              <div className="text-sm tracking-tight">Token listed</div>
            </div>
          </div>
        </div>
        {jexPrice && (
          <div className="col-span-4 p-3">
            <div className="">
              <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                {jexPrice?.rate} / {jexPrice?.unit}
              </div>
              <div className="text-sm tracking-tight">$JEX Price</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Stats.propTypes = {
  //
};

export default Stats;
