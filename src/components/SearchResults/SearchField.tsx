import SearchField from "../SearchField/SearchField";
import style from "../../../styles/SearchResults.module.scss";
import AirportsSuggestions from "../Suggestions/AirportSuggestions";
import { useEffect, useState } from "react";
import { useUIContext } from "../UI";

function ResultsSearchField({ setValue, fieldName, icon, value, label, placeholder }: any) {
  const { activeField, isModalOn, currentModal, setActiveField } = useUIContext();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (activeField === fieldName) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeField, fieldName]);
  return (
    <SearchField
      className={`${style.lilSearchField}`}
      inputClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      suggestions={AirportsSuggestions}
      suggestionsClass={style.leftFieldSuggestions}
      onSuggestionSelect={({ suggestion, IATA }: any) => {
        setValue(suggestion, IATA);
      }}
      //   onChange={(value: any) => {
      //     setValue(value);
      //   }}
      //   isActive={activeField === "originFlightSearch"}
      isActive={isActive}
      onActivate={() => {
        setActiveField(fieldName);
      }}
      onDeactivate={() => {
        if (setActiveField) setActiveField("");
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
