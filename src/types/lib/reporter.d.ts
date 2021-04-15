export = Reporter;
declare class Reporter {
    constructor(tokens: any, config: any);
    commentDirectiveParser: import("./comment-directive-parser");
    reports: any[];
    config: any;
    addReport(line: any, column: any, severity: any, message: any, ruleId: any, fix: any): void;
    addMessage(loc: any, defaultSeverity: any, message: any, ruleId: any, fix: any): void;
    addMessageExplicitLine(line: any, column: any, defaultSeverity: any, message: any, ruleId: any, fix: any): void;
    error(ctx: any, ruleId: any, message: any, fix: any): void;
    warn(ctx: any, ruleId: any, message: any, fix: any): void;
    errorAt(line: any, column: any, ruleId: any, message: any): void;
    severityOf(ruleId: any): any;
    get errorCount(): number;
    get warningCount(): number;
    _countReportsWith(severity: any): number;
    get messages(): any[];
    get filePath(): any;
}
declare namespace Reporter {
    export const SEVERITY: Readonly<{
        ERROR: number;
        WARN: number;
    }>;
}
