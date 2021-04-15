export = BaseDeprecation;
declare const BaseDeprecation_base: typeof import("../base-checker");
declare class BaseDeprecation extends BaseDeprecation_base {
    constructor(reporter: any, ruleId: any, meta: any);
    active: boolean;
    PragmaDirective(node: any): void;
    version: any;
    deprecationVersion(): void;
}
