import React, { useState, useEffect } from "react";
import InputField from "../InputField/InputField";
import Suggestions from "../Autocomplete/Suggestions";
import { hotelAutoComplete as fetchSuggestions } from "../../utils/fetchSuggestions";
type props = {
    inputClass: string;
    icon?: string;
    value?: string;
    label: string;
    onSuggestionSelected?: (x: string) => void;
};
type autocompleteT = Array<{
    autocomplete: { id: string; main: string; secondary: string };
    identifier: string;
}>;
const HotelSearch = (props: props) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState<autocompleteT>([]);
    const [searchTerm, setSearchTerm] = useState(props.value || "");
    function isSuggestionClicked(e: React.FocusEvent<HTMLDivElement>) {
        return (
            e.relatedTarget !== null &&
            (e.relatedTarget as HTMLElement).classList.contains("suggestions")
        );
    }

    useEffect(() => {
        (async () => {
            setSuggestions(await fetchSuggestions(searchTerm));
        })();
    }, [searchTerm]);
    return (
        <div
            onBlur={(e) => {
                if (!isSuggestionClicked(e)) setShowSuggestions(false);
            }}
            onFocus={() => setShowSuggestions(true)}
        >
            <InputField
                placeholder="Hotel location"
                label={props.label}
                className={props.inputClass}
                icon={props.icon}
                name="hotelLocation"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {showSuggestions && (
                <Suggestions
                    onSuggestionClick={({ suggestion }) => {
                        setShowSuggestions(false);
                        setSearchTerm(suggestion);
                        if (props.onSuggestionSelected)
                            props.onSuggestionSelected(suggestion);
                    }}
                    className="suggestions"
                    suggestions={suggestions}
                />
            )}
        </div>
    );
};
export default HotelSearch;
