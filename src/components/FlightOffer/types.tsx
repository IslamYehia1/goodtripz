export type propsType = {
    duration: string;
    price: string;
    stopsNumber: string;
    departureTime: string;
    arrivalTime: string;
    departure: string;
    destination: string;
    stops: Array<string>;
    cities: {
        from: string;
        to: string;
    };
};
