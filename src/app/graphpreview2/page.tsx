"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GreenHouseDetails from "@/components/GreenHouseDetails";
import Graph from "@/components/graph";
import { xValues2, yValues2 } from "@/api/data";

const GraphPreview2 = () => {
  return (
    <div>
      <GreenHouseDetails GreenHouseNO={2} />
      <div className="m-2 bg-gradient-to-br from-green-100 via-blue-200 to-green-100 mx-4 rounded-3xl">
        <div className="flex justify-between items-center"></div>
        <Graph xValues={xValues2} yValues={yValues2} greeanHoseNo={2} />
      </div>
    </div>
  );
};

export default GraphPreview2;
