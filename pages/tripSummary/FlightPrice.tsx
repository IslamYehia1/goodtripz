import S from "styles/FlightSummary.module.scss";

type propsT = {
  priceBreakdown: {
    childrenCount: number;
    adultsCount: number;
    childrenPrice: number;
    adultsPrice: number;
    totalPrice: number;
  };
};

function FlightPrice({ priceBreakdown }: propsT) {
  const { childrenCount, adultsCount, childrenPrice, adultsPrice, totalPrice } = priceBreakdown;
  return (
    <div className={S.fareSummarySection}>
      <h1>Price Summary</h1>
      <div className={S.row}>
        <span>{childrenCount} Child</span>
        <span>{childrenPrice} USD</span>
      </div>
      <div className={S.row}>
        <span>{adultsCount} Adult</span>
        <span>{adultsPrice} USD</span>
      </div>
      <div className={S.lineSeperator}></div>
      <div className={`${S.row} ${S.tax}`}>
        <span>Tax</span>
        <span>12.2 USD</span>
      </div>
      <div className={S.lineSeperator}></div>

      <div className={`${S.row} ${S.total}`}>
        <span>Total</span>
        <span>{totalPrice} USD</span>
      </div>
    </div>
  );
}

export default FlightPrice;
