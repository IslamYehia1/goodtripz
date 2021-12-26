import { ReactNode, useState } from "react";
import SearchExtraModal from "../Modal/SearchExtraModal";
import style from "./SearchForm.module.scss";
import Button from "../Button/Button";
import {SearchIcon,ExpandIcon,FlyToIcon,FlyFromIcon,DateIcon} from "../Icons"; //prettier-ignore
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

type propsType = {
  children: ReactNode;
  isExpanded: Boolean;
  expand: () => void;
  shrink: () => void;
  label: string;
};
const SearchFilter = ({
  label,
  children,
  isExpanded,
  expand,
  shrink,
}: propsType) => {
  return (
    <SearchExtraModal
      isOpen={isExpanded}
      className={style.modal}
      closeModal={shrink}
    >
      <div className={style.searchFilterWrapper}>
        <Button
          icon={ExpandIcon}
          className={style.button}
          handleClick={() => {
            if (isExpanded) shrink();
            else expand();
          }}
          type="button"
        >
          {label}
        </Button>
      </div>

      {isExpanded && <div className={style.optionsWindow}>{children}</div>}
    </SearchExtraModal>
  );
};
export default SearchFilter;
