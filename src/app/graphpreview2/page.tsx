"use client";

import React from "react";
import GreenHouseDetails from "@/components/GreenHouseDetails";
import Graph from "@/components/graph";
import { xValues2, yValues2 } from "@/api/data";

const GraphPreview2 = () => {
  return (
    <div>
      <GreenHouseDetails GreenHouseNO={2} />
      <div className="m-2  mx-4 rounded-3xl">
        <div className="flex justify-between items-center"></div>
        <Graph xValues={xValues2} yValues={yValues2} greeanHoseNo={2} />
      </div>
    </div>
  );
};

export default GraphPreview2;
