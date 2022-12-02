import Button from "../../Button/Button";
import { PlusIcon, MinusIcon } from "../../Icons";
import style from "../SearchForm.module.scss";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import SearchOption from "src/components/SearchOption";
import { useState } from "react";
const TravellersOptions = () => {
  const {
    addAdultTraveller,
    removeAdultTraveller,
    removeChildTraveller,
    addChildTraveller,
    adults,
    children,
  } = useHotelsContext();
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <SearchOption
        onActivate={() => setIsActive(true)}
        onDeActivate={() => setIsActive(false)}
        isActive={isActive}
        btnValue={`${parseInt(adults) + parseInt(children)} Travellers`}
      >
        <div className={style.travellersOptions}>
          <div>
            <Button handleClick={addAdultTraveller} icon={PlusIcon} />
            <span>{`${adults} Adults`}</span>
            <Button handleClick={removeAdultTraveller} type="button" icon={MinusIcon} />
          </div>
          <div>
            <Button handleClick={addChildTraveller} icon={PlusIcon} type="button" />
            {`${children} Children`}
            <Button handleClick={removeChildTraveller} type="button" icon={MinusIcon} />
          </div>
        </div>
      </SearchOption>
    </>
  );
};

export default TravellersOptions;
