export type propsType = {
    inputClass: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    value?: string;
    label: string;
    onSuggestionSelected?: (x: string) => void;
};
export type autocompleteT = Array<{
    autocomplete: { id: string; main: string; secondary: string };
    identifier: string;
}>;
