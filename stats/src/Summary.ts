import { HtmlReport } from "./reportTargets/HtmlReport";
import { WinsAnlysis } from "./analyzer/WinsAnlysis";
import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static WinsAnlysisWithHtmlReport(team: string) {
    return new Summary(new WinsAnlysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public OutputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);

    this.OutputTarget.print(output);
  }
}

// new Summary(new WinsAnlysis(), new ConsoleReport());
