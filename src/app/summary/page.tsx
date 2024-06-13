"use client";
import { Greenhouse1, PlantMetrics } from "@/api/data";
import PlantMetricsTable from "@/components/PlantMetricsTable";
import { Button } from "@nextui-org/react";
import { useState } from "react";

// Sample code
const Summary = () => {
  const [greenhouseName, setGreenhouseName] = useState("GH01");
  const [cropName, setCropName] = useState("Japanese Cucumber (Apalo)");
  const [numbersOfPlants, setNumbersOfPlants] = useState(1440);
  const [totalHarvest, setTotalHarvest] = useState(7808.9);
  const [totalHarvestCropDays, setTotalHarvestCropDays] = useState(135);
  const [numbersOfHarvestedDays, setNumbersOfHarvestedDays] = useState(135);
  const [avgHarvestQtyPerDay, setAvgHarvestQtyPerDay] = useState(57.8437037);
  const [avgHarvestQtyPerPlant, setAvgHarvestQtyPerPlant] =
    useState(5.422847222);
  const [avgProductionFromPlantPerDay, setAvgProductionFromPlantPerDay] =
    useState(0.040169239);
  const [targetProduction, setTargetProduction] = useState(7808.9);
  const [targetAvgProductionPerPlantKg, setTargetAvgProductionPerPlantKg] =
    useState(5.422847222);
  const [predictedAvgProductionPerUnitG, setPredictedAvgProductionPerUnitG] =
    useState("200");
  const [
    predictedMaxAvgProductionFromPlantPerDayG,
    setPredictedMaxAvgProductionFromPlantPerDayG,
  ] = useState(288);
  const [
    predictedMinAvgProductionFromPlantPerDayG,
    setPredictedMinAvgProductionFromPlantPerDayG,
  ] = useState(96);
  const [predictedAvgProductionPerPlantG, setPredictedAvgProductionPerPlantG] =
    useState(144);

  const handleDataGH01 = (greenHouseNo: number) => {
    setGreenhouseName(Greenhouse1.Greenhouse_Name[greenHouseNo]);
    setCropName(Greenhouse1.Crop_Name[greenHouseNo]);
    setNumbersOfPlants(Greenhouse1.Total_Plants[greenHouseNo]);
    setTotalHarvest(PlantMetrics.Total_Harvest[greenHouseNo]);
    setTotalHarvestCropDays(PlantMetrics.Total_Harvest_Crop_Days[greenHouseNo]);
    setNumbersOfHarvestedDays(
      PlantMetrics.Numbers_of_Harvested_Days[greenHouseNo]
    );
    setAvgHarvestQtyPerDay(
      PlantMetrics.Average_Harvested_Qty_Per_Day[greenHouseNo]
    );
    setAvgHarvestQtyPerPlant(
      PlantMetrics.Average_Harvested_Qty_Per_Plant[greenHouseNo]
    );
    setAvgProductionFromPlantPerDay(
      PlantMetrics.Average_Production_from_Plant_Per_Day[greenHouseNo]
    );
    setTargetProduction(PlantMetrics.Target_Production[greenHouseNo]);
    setTargetAvgProductionPerPlantKg(
      PlantMetrics.Target_Average_Production_Per_Plant[greenHouseNo]
    );
    setPredictedAvgProductionPerUnitG(
      PlantMetrics.Predicted_Avg_Production_Per_unit[greenHouseNo]
    );
    setPredictedMaxAvgProductionFromPlantPerDayG(
      PlantMetrics.Predicted_Max_Avg_Production_from_Plant_Per_Day[greenHouseNo]
    );
    setPredictedMinAvgProductionFromPlantPerDayG(
      PlantMetrics.Predicted_Min_Avg_Production_from_Plant_Per_Day[greenHouseNo]
    );
    setPredictedAvgProductionPerPlantG(
      PlantMetrics.Predicted_Avg_Production_Per_Plant[greenHouseNo]
    );
  };

  return (
    <div className="p-3">
      <div className="grid grid-cols-3 ">
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
        <div className="flex-grow text-4xl text-bolt flex justify-center items-center">
          Crop Harvest Overview
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 ">
        <Button color="primary" onClick={() => handleDataGH01(0)}>
          GH01
        </Button>
        <Button color="primary" onClick={() => handleDataGH01(1)}>
          GH02
        </Button>
        <Button color="primary" onClick={() => handleDataGH01(2)}>
          GH03
        </Button>
      </div>
      <PlantMetricsTable
        greenhouseName={greenhouseName}
        cropName={cropName}
        numbersOfPlants={numbersOfPlants}
        totalHarvest={totalHarvest}
        totalHarvestCropDays={totalHarvestCropDays}
        numbersOfHarvestedDays={numbersOfHarvestedDays}
        avgHarvestQtyPerDay={avgHarvestQtyPerDay}
        avgHarvestQtyPerPlant={avgHarvestQtyPerPlant}
        avgProductionFromPlantPerDay={avgProductionFromPlantPerDay}
        targetProduction={targetProduction}
        targetAvgProductionPerPlantKg={targetAvgProductionPerPlantKg}
        predictedAvgProductionPerUnitG={predictedAvgProductionPerUnitG}
        predictedMaxAvgProductionFromPlantPerDayG={
          predictedMaxAvgProductionFromPlantPerDayG
        }
        predictedMinAvgProductionFromPlantPerDayG={
          predictedMinAvgProductionFromPlantPerDayG
        }
        predictedAvgProductionPerPlantG={predictedAvgProductionPerPlantG}
      />
    </div>
  );
};

export default Summary;
