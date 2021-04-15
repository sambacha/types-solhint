export = MarkCallableContractsChecker;
declare class MarkCallableContractsChecker {
    constructor(reporter: any);
    reporter: any;
    ruleId: string;
    meta: {
        type: string;
        docs: {
            description: string;
            category: string;
            examples: {
                good: {
                    description: string;
                    code: string;
                }[];
                bad: {
                    description: string;
                    code: string;
                }[];
            };
        };
        isDefault: boolean;
        recommended: boolean;
        defaultSetup: string;
        deprecated: boolean;
        schema: any;
    };
    Identifier(node: any): void;
}
