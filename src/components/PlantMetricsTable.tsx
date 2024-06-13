import React from "react";

interface PlantMetricsTableProps {
  greenhouseName: string;
  cropName: string;
  numbersOfPlants: number;
  totalHarvest: number;
  totalHarvestCropDays: number;
  numbersOfHarvestedDays: number;
  avgHarvestQtyPerDay: number;
  avgHarvestQtyPerPlant: number;
  avgProductionFromPlantPerDay: number;
  targetProduction: number;
  targetAvgProductionPerPlantKg: number;
  predictedAvgProductionPerUnitG: string;
  predictedMaxAvgProductionFromPlantPerDayG: number;
  predictedMinAvgProductionFromPlantPerDayG: number;
  predictedAvgProductionPerPlantG: number;
}

const PlantMetricsTable: React.FC<PlantMetricsTableProps> = ({
  greenhouseName,
  cropName,
  numbersOfPlants,
  totalHarvest,
  totalHarvestCropDays,
  numbersOfHarvestedDays,
  avgHarvestQtyPerDay,
  avgHarvestQtyPerPlant,
  avgProductionFromPlantPerDay,
  targetProduction,
  targetAvgProductionPerPlantKg,
  predictedAvgProductionPerUnitG,
  predictedMaxAvgProductionFromPlantPerDayG,
  predictedMinAvgProductionFromPlantPerDayG,
  predictedAvgProductionPerPlantG,
}) => {
  return (
    <div className="m-10 rounded-lg">
      <table
        className="min-w-full border-collapse border border-gray-800 table-fixed"
        style={{ width: "600px" }}
      >
        <thead>
          <tr>
            <th
              className="border border-gray-800 p-2 text-left"
              style={{ width: "50%" }}
            >
              Greenhouse Name
            </th>
            <td className="border border-gray-800 p-2">{greenhouseName}</td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left">Crop Name</th>
            <td className="border border-gray-800 p-2">{cropName}</td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-center col-span-1">
              Target Expectation
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border border-gray-800 p-2 text-left">
              Numbers of Plants
            </th>
            <td className="border border-gray-800 p-2">{numbersOfPlants}</td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left">
              Total Harvest
            </th>
            <td className="border border-gray-800 p-2">{totalHarvest}</td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left">
              Total Harvest Crop Days
            </th>
            <td className="border border-gray-800 p-2">
              {totalHarvestCropDays}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left">
              Numbers of Harvested Days
            </th>
            <td className="border border-gray-800 p-2">
              {numbersOfHarvestedDays}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left">
              Average Harvested Qty Per Day
            </th>
            <td className="border border-gray-800 p-2">
              {avgHarvestQtyPerDay}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left">
              Average Harvested Qty Per Plant
            </th>
            <td className="border border-gray-800 p-2">
              {avgHarvestQtyPerPlant}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left">
              Average Production from Plant Per Day
            </th>
            <td className="border border-gray-800 p-2">
              {avgProductionFromPlantPerDay}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left">
              Target Production (100 days)
            </th>
            <td className="border border-gray-800 p-2">{targetProduction}</td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left">
              Target Average Production Per Plant (Kg)
            </th>
            <td className="border border-gray-800 p-2">
              {targetAvgProductionPerPlantKg}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left text-red-600">
              Predicted Avg Production Per unit (g)
            </th>
            <td className="border border-gray-800 p-2 text-red-600">
              {predictedAvgProductionPerUnitG}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left text-red-600">
              Predicted Max Avg Production from Plant Per Day (g)
            </th>
            <td className="border border-gray-800 p-2 text-red-600">
              {predictedMaxAvgProductionFromPlantPerDayG}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left text-red-600">
              Predicted Min Avg Production from Plant Per Day (g)
            </th>
            <td className="border border-gray-800 p-2 text-red-600">
              {predictedMinAvgProductionFromPlantPerDayG}
            </td>
          </tr>
          <tr>
            <th className="border border-gray-800 p-2 text-left text-red-600">
              Predicted Avg Production Per Plant (g)
            </th>
            <td className="border border-gray-800 p-2 text-red-600">
              {predictedAvgProductionPerPlantG}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlantMetricsTable;
