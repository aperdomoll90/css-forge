export interface CvDownloadPropsType {
    color?: `#${string}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})` | '';
    linkUrl: string;
    buttonHover?: string;
    labelColor?: string;
}
