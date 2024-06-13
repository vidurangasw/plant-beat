"use client";

import React from "react";
import GreenHouseDetails from "@/components/GreenHouseDetails";
import Graph from "@/components/graph";
import { xValues1, yValues1 } from "@/api/data";

const GraphPreview = () => {
  return (
    <div>
      <GreenHouseDetails GreenHouseNO={1} />
      <div className="m-2 mx-4 rounded-3xl">
        <div className="flex justify-between items-center"></div>
        <Graph xValues={xValues1} yValues={yValues1} greeanHoseNo={1} />
      </div>
    </div>
  );
};

export default GraphPreview;
