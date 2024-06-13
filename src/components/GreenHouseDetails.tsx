import { Greenhouse1, PlantMetrics } from "@/api/data";
import React from "react";

const GreenHouseDetails: React.FC<{ GreenHouseNO: number }> = ({
  GreenHouseNO,
}) => {
  return (
    <div className="flex justify-between items-center bg-amber-100 ml-4 mr-4">
      <div className="m-2">
        <button
          className="flex items-center justify-center w-60 h-10 bg-warning text-white rounded-md"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src="/plantBeatLogo.jpg"
            alt="Go to Home"
            className="w-60 h-14 rounded-50"
          />

          {/* <span className="ml-2">Go to Home</span> */}
        </button>
      </div>
      <div className="m-2  grid grid-cols-3">
        <div>
          <h1>Green House : {Greenhouse1.Greenhouse_Name[GreenHouseNO]}</h1>
          <h1>Crop : {Greenhouse1.Crop_Name[GreenHouseNO]}</h1>
          <h1>Total Plants : {Greenhouse1.Total_Plants[GreenHouseNO]}</h1>
        </div>
        <div>
          <h1>PlantMetrics : {PlantMetrics.Total_Harvest[GreenHouseNO]}</h1>
          <h1>
            Numbers of Harvested Days :{" "}
            {PlantMetrics.Total_Harvest_Crop_Days[GreenHouseNO]}
          </h1>
          <h1>
            Average Harvested Qty Per Day :{" "}
            {PlantMetrics.Average_Harvested_Qty_Per_Day[GreenHouseNO]}
          </h1>
        </div>
        <div>
          <h1>
            Average Harvested Qty Per Plant :{" "}
            {PlantMetrics.Average_Harvested_Qty_Per_Plant[GreenHouseNO]}
          </h1>
          <h1>
            Average Production from Plant Per Day :{" "}
            {PlantMetrics.Average_Production_from_Plant_Per_Day[GreenHouseNO]}
          </h1>
          <h1>
            Target Average Production Per Plant :{" "}
            {PlantMetrics.Target_Average_Production_Per_Plant[GreenHouseNO]}
          </h1>
          <h1>
            Predicted Avg Production Per unit :{" "}
            {PlantMetrics.Predicted_Avg_Production_Per_unit[GreenHouseNO]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GreenHouseDetails;
