export type propsType = {
    inputClass: string;
    inputWrapperClass: string;
    icon?: string;
    value?: string;
    label: string;
    onSuggestionSelected?: (x: string) => void;
};
export type autocompleteT = Array<{
    autocomplete: { id: string; main: string; secondary: string };
    identifier: string;
}>;
