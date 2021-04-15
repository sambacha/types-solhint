export = StateVisibilityChecker;
declare const StateVisibilityChecker_base: typeof import("../base-checker");
declare class StateVisibilityChecker extends StateVisibilityChecker_base {
    constructor(reporter: any);
    StateVariableDeclaration(node: any): void;
}
