import { motion } from "framer-motion";
import style from "../SearchForm.module.scss";
import PickUpPlace from "./PickUpPlace";
import DropOffPlace from "./DropOffPlace";
import CarsDates from "./CarsDates";
import { useCarsContext } from "../../CommonContexts/CarsContext";
import Button from "src/components/Button/Button";
import {SearchIcon,ExpandIcon} from "../../Icons"; //prettier-ignore
import { useRouter } from "next/router";

function CarsFields() {
  const { dropOffLocation, pickUpLocation, pickUpDate, dropOffDate } = useCarsContext();
  const history = useRouter();

  function searchHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    history.push(
      `/searchResults/cars?pickUp=${pickUpLocation}&dropOff=${dropOffLocation}&pickUpDate=${pickUpDate}&dropOffDate=${dropOffDate}`
    );
  }

  return (
    <motion.form
      initial={{ scale: 0.6 }}
      animate={{ scale: 1 }}
      onSubmit={searchHandler}
      className={style.carsSearchFields}
    >
      <div className={style.fields}>
        <PickUpPlace />
        <DropOffPlace />
        <CarsDates />
        <Button
          className={`${style.button} ${style.searchButton}`}
          type="submit"
          icon={SearchIcon}
          handleClick={searchHandler}
        >
          <SearchIcon />
        </Button>
      </div>
    </motion.form>
  );
}

export default CarsFields;
