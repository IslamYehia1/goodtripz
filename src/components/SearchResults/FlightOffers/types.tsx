type searchQueryT = {
    from?: string | string[];
    to?: string | string[];
    date?: string | string[];
    returnDate?: string | string[];
    adults?: string | string[];
    childs?: string | string[];
};
export type flightOffersT = {
    searchQuery: searchQueryT;
    cities: {
        from: string;
        to: string;
    };
    // offers: Array<Object>;
    // cities: {
    //     from: string;
    //     to: string;
    // };
};
