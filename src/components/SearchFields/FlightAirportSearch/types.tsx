export type propsType = {
    label: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    placeholder: string;
    inputClass: string;
    suggestionsClass: string;
    wrapperClass?: string;
    value?: string;
    onSuggestionSelect?: (suggestion: string) => void;
};
export type autocompleteT = Array<{
    autocomplete: { id: string; main: string; secondary: string };
    identifier: string;
}>;