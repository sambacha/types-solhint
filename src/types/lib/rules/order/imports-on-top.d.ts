export = ImportsOnTopChecker;
declare const ImportsOnTopChecker_base: typeof import("../base-checker");
declare class ImportsOnTopChecker extends ImportsOnTopChecker_base {
    constructor(reporter: any);
    SourceUnit(node: any): void;
    _error(node: any): void;
}
