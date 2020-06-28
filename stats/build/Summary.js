"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var WinsAnlysis_1 = require("./analyzer/WinsAnlysis");
var Summary = /** @class */ (function () {
    function Summary(analyzer, OutputTarget) {
        this.analyzer = analyzer;
        this.OutputTarget = OutputTarget;
    }
    Summary.WinsAnlysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnlysis_1.WinsAnlysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.OutputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
// new Summary(new WinsAnlysis(), new ConsoleReport());
