export type autocompleteT = Array<{
    autocomplete: { id: string; main: string; secondary: string };
    identifier: string;
}>;
export type propsType = {
    suggestions: autocompleteT;
    className: string;
    onSuggestionClick?: (x: { suggestion: string; identifier: string }) => void;
};
