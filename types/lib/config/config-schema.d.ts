export = configSchema;
declare const configSchema: {
    type: string;
    properties: {
        rules: {
            type: string;
        };
        excludedFiles: {
            type: string;
        };
        extends: {
            anyOf: ({
                type: string;
                items?: undefined;
            } | {
                type: string;
                items: {
                    type: string;
                };
            })[];
        };
        globals: {
            type: string;
        };
        env: {
            type: string;
        };
        parserOptions: {
            type: string;
        };
        plugins: {
            type: string;
        };
    };
    additionalProperties: boolean;
};
