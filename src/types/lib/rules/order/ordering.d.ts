export = OrderingChecker;
declare const OrderingChecker_base: typeof import("../base-checker");
declare class OrderingChecker extends OrderingChecker_base {
    constructor(reporter: any);
    SourceUnit(node: any): void;
    ContractDefinition(node: any): void;
    checkOrder(children: any, orderFunction: any): void;
    report(node: any, nodeBefore: any, label: any, labelBefore: any): void;
}
