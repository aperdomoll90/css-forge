import './styles.css';
type storybookContainerProps = {
    children: string | JSX.Element | JSX.Element[] | '() => JSX.Element';
    backgroundImage?: boolean;
};
declare function StorybookContainer({ children, backgroundImage }: storybookContainerProps): JSX.Element;
export default StorybookContainer;
