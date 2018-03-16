export const URL: {
    prototype: URL;
    new(url: string, base?: string): URL;
    createObjectURL(object: any, options?: ObjectURLOptions): string;
    revokeObjectURL(url: string): void;
};
