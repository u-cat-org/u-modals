// Provider
import React from 'react';


export type TModalBody = string | React.ReactNode;


export interface IUModalContext {
  showModal: (header: string, body: TModalBody) => Promise<boolean>;
}


export type TResolveFunc = (result: boolean) => boolean


export interface IModalConfig {
  header: string;
  body: TModalBody;
  resolveFunc: TResolveFunc
}


export interface IUModalProps {
  header: string;
  body: TModalBody;
  onClose?: (result: boolean) => void;
}