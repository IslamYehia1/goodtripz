import { createContext, useCallback, useContext, useMemo, useReducer } from "react";
type STATE = {
  isModalOn: Boolean;
  currentModal: string | undefined;
  openModal?: any;
  closeModal?: any;
  activeField?: any;
  setActiveField?: any;
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
  activeField: "",
  setActiveField: "",
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
    case "setActiveField":
      return {
        ...state,
        activeField: action.value,
      };
    default:
      return state;
  }
}
function UIProvider(props: any) {
  const [state, dispatch] = useReducer(UIReducer, initialUiState);
  const openModal = useCallback(
    (value: string) => {
      dispatch({ type: "openModal", value: value });
    },
    [dispatch]
  );
  const closeModal = useCallback(
    (value: string) => {
      dispatch({ type: "closeModal" });
    },
    [dispatch]
  );
  const setActiveField = useCallback(
    (field: string) => {
      dispatch({ type: "setActiveField", value: field });
    },
    [dispatch]
  );
  const providerFuncs = useMemo(
    () => ({ ...state, setActiveField, openModal, closeModal }),
    [state]
  );
  return <UIContext.Provider value={providerFuncs}> {props.children}</UIContext.Provider>;
}
export const useUIContext = () => {
  const context = useContext(UIContext);
  return context;
};
export { UIContext };
export default UIProvider;
