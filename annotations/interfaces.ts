interface Vehicle {
  name: string;
  year: Date;
  borken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  borken: true,
  summary(): string {
    return `${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
