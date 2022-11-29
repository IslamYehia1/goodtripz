import SearchField from "../SearchField/SearchField";
import style from "./SearchForm.module.scss";
type propsType = {
  setValue: any;
  fieldName: any;
  icon: any;
  value: any;
  Suggestions: any;
  label: any;
  placeholder: any;
};
function HomeSearchField({
  setValue,
  fieldName,
  icon,
  value,
  Suggestions,
  label,
  placeholder,
}: propsType) {
  return (
    <SearchField
      className={`${style.searchFragment} ${style.flightSearchField}`}
      modalClass={style.modal}
      animate={{ flexGrow: 5 }}
      inputClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      suggestions={Suggestions}
      suggestionsClass={style.suggestions}
      onSuggestionSelect={(suggestion: any) => {
        setValue(suggestion);
      }}
      value={value}
      label={label}
      placeholder={placeholder}
      name={fieldName}
      icon={icon}
    />
  );
}
export default HomeSearchField;
