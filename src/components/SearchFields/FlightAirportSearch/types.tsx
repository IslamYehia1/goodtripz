export type propsType = {
  label: string;
  icon?: string;
  placeholder: string;
  inputClass: string;
  suggestionsClass: string;
  wrapperClass?: string;
  value?: string;
  onSuggestionSelect: (suggestion: string) => void;
  closeModal?: () => void;
};
export type autocompleteT = Array<{
  autocomplete: { id: string; main: string; secondary: string };
  identifier: string;
}>;
