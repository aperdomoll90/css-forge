export interface CvDownloadPropsType {
    size?: number;
    color?: `#${string}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})` | '';
    linkUrl: string;
    buttonHover?: string;
    label?: string;
    labelColor?: string;
}
