class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 112;

const holdString = new HoldAnything<string>();
holdString.data = "hello";
