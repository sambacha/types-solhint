export function validate(config: any): void;
export const validSeverityMap: string[];
export const invalidSeverityMap: string[];
export const defaultSchemaValueForRules: Readonly<{
    oneOf: ({
        type: string;
        enum: string[];
        const?: undefined;
    } | {
        const: boolean;
        type?: undefined;
        enum?: undefined;
    })[];
}>;
