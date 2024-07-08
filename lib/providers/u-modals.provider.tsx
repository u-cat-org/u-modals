import React, {
  createContext,
  useContext, useMemo,
  useState
} from 'react';
import { UModal } from '../components';
import { IModalConfig, IUModalContext, TModalBody, TResolveFunc } from '../u-modals.typings.ts';


const DEFAULT_U_MODAL_CONTEXT: IUModalContext = {
  showModal: () => Promise.resolve(true)
};

const UModalContext = createContext(DEFAULT_U_MODAL_CONTEXT);

export const useModals = () => {
  return useContext(UModalContext);
};

export const UModalProvider = ({ children }: React.PropsWithChildren) => {
  const [ modals, setModals ] = useState<IModalConfig[]>([]);

  function showModal(header: string, body: TModalBody): Promise<boolean> {
    let resolveFunc: TResolveFunc;

    const promise = new Promise<boolean>((resolve) => {
      resolveFunc = resolve as TResolveFunc;
    });

    setModals((modals) => [ ...modals, { header, body, resolveFunc } ]);

    return promise;
  }

  function onModalClose(result: boolean, index: number): void {
    modals[index].resolveFunc(result);

    // @ts-expect-error There is no way to skip first argument `m` declaring
    setModals((modals) => [ ...modals.filter((m, i) => i !== index) ]);
  }

  const memoizedValue = useMemo(() => {
    return { showModal };
  }, [ modals ]);

  return <UModalContext.Provider value={ memoizedValue }>
    { children }
    { modals.map((m, i) =>
      <UModal key={ i } header={ m.header } body={ m.body }
              onClose={ (result) => onModalClose(result, i) }/>
    ) }
  </UModalContext.Provider>;
};

