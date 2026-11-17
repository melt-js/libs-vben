declare const useNamespace: (block: string) => {
    b: (blockSuffix?: string) => string;
    be: (blockSuffix?: string, element?: string) => string;
    bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
    bm: (blockSuffix?: string, modifier?: string) => string;
    cssVar: (object: Record<string, string>) => Record<string, string>;
    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
    cssVarBlockName: (name: string) => string;
    cssVarName: (name: string) => string;
    e: (element?: string) => string;
    em: (element?: string, modifier?: string) => string;
    is: {
        (name: string): string;
        (name: string, state: boolean | undefined): string;
    };
    m: (modifier?: string) => string;
    namespace: string;
};
type UseNamespaceReturn = ReturnType<typeof useNamespace>;
export type { UseNamespaceReturn };
export { useNamespace };
