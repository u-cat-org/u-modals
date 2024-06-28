// Provider
export interface IUModalContext {
  showModal: (header: string, body: string) => Promise<boolean>;
}

export type TResolveFunc = (result: boolean) => boolean


export interface IModalConfig {
  header: string;
  body: string;
  resolveFunc: TResolveFunc
}


export interface IUModalProps {
  header: string;
  body: string;
  onClose?: (result: boolean) => void;
}