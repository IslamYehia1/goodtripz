import { createContext, useContext, useMemo, useReducer } from "react";
type STATE = {
  isModalOn: Boolean;
  currentModal: string | undefined;
  openModal?: any;
  closeModal?: any;
};
type ACTION =
  | {
      type: string;
      value: string;
    }
  | { type: "closeModal" };
const initialUiState = {
  isModalOn: false,
  currentModal: undefined,
};
const UIContext = createContext<STATE>(initialUiState);

function UIReducer(state: STATE, action: ACTION): STATE {
  switch (action.type) {
    case "openModal":
      return {
        ...state,
        isModalOn: true,
        currentModal: action.value,
      };
    case "closeModal":
      return {
        ...state,
        isModalOn: false,
        currentModal: undefined,
      };
    default:
      return state;
  }
}
function UIProvider(props: any) {
  const [state, dispatch] = useReducer(UIReducer, initialUiState);
  const openModal = (value: string) => {
    console.log("MODAL OPENED", value);

    dispatch({ type: "openModal", value: value });
  };
  const closeModal = (value: string) => {
    console.log("MODAL CLOSED", value);

    dispatch({ type: "closeModal" });
  };
  const providerFuncs = useMemo(() => ({ ...state, openModal, closeModal }), [state]);
  return <UIContext.Provider value={providerFuncs} children={props.children} />;
}
export const useUIContext = () => {
  const context = useContext(UIContext);
  return context;
};
export { UIContext };
export default UIProvider;
