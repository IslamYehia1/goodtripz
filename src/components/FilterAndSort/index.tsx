import style from "./FilterAndSort.module.scss";
import Button from "../Button/Button";
import { SortIcon, FilterIcon } from "../Icons";
type propsType = {
    isMobile?: Boolean;
    sortClick?: () => void;
    filterClick?: () => void;
};
const FilterAndSort = (props: propsType) => {
    return (
        <div className={style.filterAndSort}>
            <Button
                className={`${style.button} ${style.sortBtn}`}
                icon={SortIcon}
                handleClick={() => {
                    if (props.sortClick) props.sortClick();
                }}
            >
                Sort by
            </Button>
            {props.isMobile && (
                <Button
                    className={`${style.filterBtn}`}
                    icon={FilterIcon}
                    handleClick={() => {
                        if (props.filterClick) props.filterClick();
                    }}
                >
                    Filter
                </Button>
            )}
        </div>
    );
};
export default FilterAndSort;
