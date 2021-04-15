export = AvoidCallValueChecker;
declare const AvoidCallValueChecker_base: typeof import("../base-checker");
declare class AvoidCallValueChecker extends AvoidCallValueChecker_base {
    constructor(reporter: any);
    MemberAccess(node: any): void;
    validateCallValue(node: any): void;
}
