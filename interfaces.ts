const oldCivic = {
  name: "civic",
  year: 2000,
  borken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  borken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.borken}`);
};

printVehicle(oldCivic);
