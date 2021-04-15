export = MaxStatesCountChecker;
declare const MaxStatesCountChecker_base: typeof import("../base-checker");
declare class MaxStatesCountChecker extends MaxStatesCountChecker_base {
    constructor(reporter: any, config: any);
    maxStatesCount: any;
    ContractDefinition(node: any): void;
    _error(node: any, countOfVars: any): void;
}
