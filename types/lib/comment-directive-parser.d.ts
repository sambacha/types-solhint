export = CommentDirectiveParser;
declare class CommentDirectiveParser {
    constructor(tokens: any);
    lastLine: any;
    ruleStore: RuleStore;
    parseComments(tokens: any): void;
    onComment(lexema: any): void;
    parseRuleIds(text: any, start: any): any;
    isRuleEnabled(line: any, ruleId: any): boolean;
}
declare class RuleStore {
    constructor(lastLine: any);
    disableRuleByLine: any[];
    disableAllByLine: any[];
    lastLine: any;
    initRulesTable(): void;
    disableRules(curLine: any, newRules: any): void;
    disableRulesToEndOfFile(startLine: any, rules: any): void;
    enableRules(curLine: any, rules: any): void;
    enableRulesToEndOfFile(startLine: any, rules: any): void;
    isRuleEnabled(line: any, ruleId: any): boolean;
    _toEndOfFile(from: any, callback: any): void;
}
