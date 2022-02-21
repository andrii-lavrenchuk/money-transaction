import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// operations
import { transactionsOperations } from "../../redux/transactions";

const SendMoneyModal = (props) => {
  const { currentuserid, userid, value, children, onHide } = props;

  const onSendButtonClick = () => {
    if (props.value < 1 || props.value === 0) {
      toast.error("jhhkhkh");
      return;
    }

    if (props.amount <= 0) {
      toast.error("Your amount is 0");
      return;
    }

    if (props.amount < props.value) {
      toast.error("Not enough money");
      return;
    }

    const transaction = {
      from: currentuserid,
      to: userid,
      amount: value,
    };
    props.send(transaction);
    toast.info("Money was sent");

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
  send: transactionsOperations.makeTransaction,
};

SendMoneyModal.propTypes = {
  currentuserid: PropTypes.string.isRequired,
  userid: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMoneyModal);
