export = MaxLineLengthChecker;
declare const MaxLineLengthChecker_base: typeof import("../base-checker");
declare class MaxLineLengthChecker extends MaxLineLengthChecker_base {
    constructor(reporter: any, config: any, inputSrc: any);
    maxLength: any;
    inputSrc: any;
    SourceUnit(): void;
    validateLineLength(curLength: any, lineNum: any): void;
}
