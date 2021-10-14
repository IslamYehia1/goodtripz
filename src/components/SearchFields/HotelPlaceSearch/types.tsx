export type propsType = {
  inputClass: string;
  inputWrapperClass: string;
  suggestionsClass: string;
  icon?: string;
  value?: string;
  label: string;
  onSuggestionSelected?: (x: string) => void;
  searchTerm: string;
  dispatch: React.Dispatch<any>;
};
export type autocompleteT = Array<{
  autocomplete: { id: string; main: string; secondary: string };
  identifier: string;
}>;
