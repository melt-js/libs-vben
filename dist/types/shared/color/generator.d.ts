interface ColorItem {
    alias?: string;
    color: string;
    name: string;
}
declare function generatorColorVariables(colorItems: ColorItem[]): Record<string, string>;
export { generatorColorVariables };
