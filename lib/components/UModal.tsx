import { IUModalProps } from '../u-modals.typings.ts';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


export function UModal({ header, body, onClose }: IUModalProps) {
  function submit(result: boolean): void {
    onClose?.(result);
  }

  return (
    <Modal isOpen={ true }>
      <ModalHeader>{ header }</ModalHeader>
      <ModalBody>
        { body }
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={ () => submit(true) }>
          OK
        </Button>{ ' ' }
        <Button color="secondary" onClick={ () => submit(false) }>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
