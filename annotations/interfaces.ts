interface Reportable {
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

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
