import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const SendMoneyModal = (props) => {
  const onSendButtonCLick = () => {
    if (props.value < 1 || props.value === 0) {
      toast.error("jhhkhkh");
      return;
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={onSendButtonCLick}>Send</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SendMoneyModal;
