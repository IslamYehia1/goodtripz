import Button from "../../Button/Button";
import { PlusIcon, MinusIcon } from "../../Icons";
import style from "../SearchForm.module.scss";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
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
  } = useFlightContext();
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <SearchOption
        onActivate={() => setIsActive(true)}
        onDeActivate={() => setIsActive(false)}
        isActive={isActive}
        btnValue={`${parseInt(adults) + parseInt(children)} Travellers`}
      >
        <ul className={style.travellersOptions}>
          <li>
            <Button handleClick={addAdultTraveller} icon={PlusIcon} />
            <span>{`${adults} Adults`}</span>
            <Button handleClick={removeAdultTraveller} type="button" icon={MinusIcon} />
          </li>
          <li>
            <Button handleClick={addChildTraveller} icon={PlusIcon} type="button" />
            {`${children} Children`}
            <Button handleClick={removeChildTraveller} type="button" icon={MinusIcon} />
          </li>
        </ul>
      </SearchOption>
    </>
  );
};

export default TravellersOptions;
