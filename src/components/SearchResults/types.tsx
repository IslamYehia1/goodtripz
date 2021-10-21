export type flightsSideBarT = {
  closeModal: () => void;
  isFullScreen: Boolean;
  isMobile: Boolean;
  searchQuery: any;
  airports: {
    from: { name: string; city: string };
    to: { name: string; city: string };
  };
  dispatch: React.Dispatch<any>;
};

export type hotelsSideBarT = {
  isFullScreen: Boolean;
  isMobile: Boolean;
  closeModal: () => void;
  dispatch: React.Dispatch<any>;
  searchTerms: any;
};

export type searchResultsT = {
  className: string;
};
