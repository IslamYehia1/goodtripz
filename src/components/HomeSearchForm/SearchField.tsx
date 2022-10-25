import { useEffect, useState } from "react";
import SearchField from "../SearchField/SearchField";
import style from "./SearchForm.module.scss";
import { useUIContext } from "../UI";
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
  const [isActive, setIsActive] = useState(false);
  const { activeField, isModalOn, currentModal, setActiveField } = useUIContext();
  useEffect(() => {
    if (activeField === fieldName) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeField, fieldName]);
  return (
    <SearchField
      // ${style.aSearchField}
      className={`${style.searchFragment} ${style.flightSearchField} ${
        isActive && isModalOn ? style.inModal : ""
      } `}
      animate={{ flexGrow: 5 }}
      inputClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      suggestions={Suggestions}
      suggestionsClass={style.suggestions}
      //   onSuggestionSelect={({ suggestion, IATA }: any) => {
      //     setValue(suggestion, IATA);
      //   }}
      onSuggestionSelect={(suggestion: any) => {
        setValue(suggestion);
      }}
      // onChange={(value: any) => {
      //   setValue(value);
      // }}
      isActive={isActive}
      onActivate={() => {
        setActiveField(fieldName);
      }}
      onDeactivate={() => {
        setActiveField("");
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
