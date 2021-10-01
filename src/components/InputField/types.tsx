export type propsType = {
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    className?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    children?: React.ReactNode;
    handleKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    focusHandler?: React.FocusEventHandler<HTMLInputElement>;
    blurHandler?: React.FocusEventHandler<HTMLInputElement>;
    iconClickHandler?: React.MouseEventHandler<HTMLImageElement>;
    selectedSuggestion?: string | null;
};
