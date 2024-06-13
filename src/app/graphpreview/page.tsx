"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GreenHouseDetails from "@/components/GreenHouseDetails";
import Graph from "@/components/graph";
import { xValues, yValues } from "@/api/data";

const GraphPreview1 = () => {
  return (
    <div>
      <GreenHouseDetails GreenHouseNO={0} />
      <div className="m-2  mx-4 rounded-3xl">
        <div className="flex justify-between items-center"></div>
        <Graph xValues={xValues} yValues={yValues} greeanHoseNo={0} />
      </div>
    </div>
  );
};

export default GraphPreview1;
