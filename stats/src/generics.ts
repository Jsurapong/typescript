class HoldAnything<TypeOfData> {
  data: TypeOfData;

  add(a: TypeOfData): TypeOfData {
    return a;
  }
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 112;
holdNumber.add(10);

const holdString = new HoldAnything<string>();
holdString.data = "hello";
