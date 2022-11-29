import SearchField from "../SearchField/SearchField";
import style from "./SearchResults.module.scss";
import AirportsSuggestions from "../Suggestions/AirportSuggestions";

function ResultsSearchField({
  setValue,
  fieldName,
  icon,
  value,
  label,
  placeholder,
  modalClass,
}: any) {
  return (
    <SearchField
      className={`${style.lilSearchField}`}
      inputClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      modalClass={style.modal}
      suggestions={AirportsSuggestions}
      suggestionsClass={style.leftFieldSuggestions}
      onSuggestionSelect={({ suggestion, IATA }: any) => {
        setValue(suggestion, IATA);
      }}
      value={value}
      label={label}
      placeholder={placeholder}
      name={fieldName}
      // icon={FlyFromIcon}
    />
  );
}
export default ResultsSearchField;
