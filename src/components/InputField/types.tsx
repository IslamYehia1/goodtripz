export type propsType = {
    icon?: string;
    className?: string;
    wrapperClass?: string;
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
