export interface ColorPropsType {
    color: string | `#${string}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;
}
export declare const LightenDarkenColor: (color: any, amount: number) => string;
