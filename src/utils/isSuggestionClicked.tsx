export default function isSuggestionClicked(
  e: React.FocusEvent<HTMLDivElement>,
  suggestionsClass: string
) {
  return (
    e.relatedTarget !== null &&
    (e.relatedTarget as HTMLElement).classList.contains(suggestionsClass)
  );
}
