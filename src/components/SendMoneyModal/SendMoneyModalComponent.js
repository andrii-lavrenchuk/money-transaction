import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import { transactionsOperations } from "../../redux/transactions";

import { connect } from "react-redux";

const SendMoneyModal = (props) => {
  const { currentuserid, userid, value, onClick, children, onHide } = props;
  const onSendButtonClick = () => {
    if (props.value < 1 || props.value === 0) {
      toast.error("jhhkhkh");
      return;
    }

    if (props.amount <= 0) {
      toast.error("Your amount 0");
      return;
    }

    const transaction = {
      from: currentuserid,
      to: userid,
      amount: value,
    };

    onClick(transaction);
    onHide();
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
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
        <Button onClick={onSendButtonClick}>Send</Button>
      </Modal.Footer>
    </Modal>
  );
};
const mapStateToProps = (state) => ({
  currentuserid: state.users.currentUser.id,
  amount: state.transactions.amount,
});

const mapDispatchToProps = {
  onClick: transactionsOperations.makeTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMoneyModal);
