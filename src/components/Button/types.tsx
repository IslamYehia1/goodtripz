export type propsType = {
    children?: React.ReactNode;
    icon?: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }
    >;
    className?: string;
    alt?: string;
    id?: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
};
