export type modalProps = {
  isOpen?: Boolean;
  className: string;
  onFocus?: () => void;
  onClick?: () => void;
  altClassName?: string;
};
export type searchModalProps = {
  // isOpen?: Boolean;
  className: string;
  children: React.ReactNode;
  altClassName?: string;
  openWindow?: () => void;
  openOnFocus?: Boolean;
  isFullScreen?: Boolean;
  onFocus?: () => void;
  closeModal?: () => void;
  // closeModal: () => void;
};
export type modalState = {
  el: HTMLDivElement;
  onFocus: () => void;
};
export type FiltersModalType = {
  closeModal: () => void;
  children: React.ReactNode;
  isOpen: Boolean;
  className: string;
};
