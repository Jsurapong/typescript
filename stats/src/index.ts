import { MatchReader } from "./MatchReader";

import { Summary } from "./Summary";

// Create an object that satisfies the 'DataReader' interface

//Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.WinsAnlysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
