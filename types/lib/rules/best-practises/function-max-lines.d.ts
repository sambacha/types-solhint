export = FunctionMaxLinesChecker;
declare const FunctionMaxLinesChecker_base: typeof import("../base-checker");
declare class FunctionMaxLinesChecker extends FunctionMaxLinesChecker_base {
    constructor(reporter: any, config: any);
    maxLines: any;
    FunctionDefinition(node: any): void;
    _linesCount(node: any): number;
    _isSingleLineBlock(startStopGap: any): boolean;
    _withoutCloseBracket(startStopGap: any): number;
    _error(node: any): void;
}
