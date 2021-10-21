type actionT = {
  type: string;
  val: string;
};

export type propsType = {
  label: string;
  icon?: string;
  placeholder: string;
  inputClass: string;
  suggestionsClass: string;
  wrapperClass?: string;
  value?: string;
  // onSuggestionSelect: (suggestion: string) => void;
  closeModal?: () => void;
  dispatch: React.Dispatch<any>;
  searchTerm?: string;
  className: string;
};
export type autocompleteT = Array<{
  autocomplete: { id: string; main: string; secondary: string };
  identifier: string;
}>;
