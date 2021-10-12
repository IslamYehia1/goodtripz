export type flightsSideBarT = {
    closeModal: () => void;
    isFullScreen: Boolean;
    isMobile: Boolean;
    searchQuery: any;
    cities: {
        from: string;
        to: string;
    };
};

export type hotelsSideBarT = {
    isFullScreen: Boolean;
    isMobile: Boolean;
    closeModal: () => void;
};

export type searchResultsT = {
    className: string;
};
