export = EventNameCamelcaseChecker;
declare const EventNameCamelcaseChecker_base: typeof import("../base-checker");
declare class EventNameCamelcaseChecker extends EventNameCamelcaseChecker_base {
    constructor(reporter: any);
    EventDefinition(node: any): void;
}
