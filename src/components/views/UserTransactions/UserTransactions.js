import { useEffect } from "react";

import { connect } from "react-redux";

import Loader from "../../Loader";

import { transactionsOperations } from "../../../redux/transactions";

const UserTransactions = ({
  setAmount,
  getAllTransactions,
  allTransactions,
  currentUserId,
  isLoading,
}) => {
  const countBalance = () => {
    let amount = 0;

    return (amount = allTransactions.reduce((total, item) => {
      if (currentUserId === item.to) {
        return total + item.amount;
      }

      if (currentUserId === item.from) {
        return total - item.amount;
      }

      if (currentUserId === item.from && currentUserId === item.to) {
        return total + item.amount;
      }
      amount = total;

      return amount;
    }, amount));
  };
  useEffect(() => {
    getAllTransactions();
  }, []);

  useEffect(() => {
    setAmount(countBalance());
  }, []);

  return (
    <>
      <h2>User Transactions View</h2>
      {isLoading ? <Loader /> : <h3>Your balance is {countBalance()} $</h3>}
    </>
  );
};

const mapStateToProps = (state) => ({
  allTransactions: state.transactions.allUsersTransactions,
  currentUserId: state.users.currentUser.id,
  isLoading: state.transactions.isLoading,
});

const mapDispatchToProps = {
  getAllTransactions: transactionsOperations.getAllTransaction,
  setAmount: transactionsOperations.setCurrentAmount,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTransactions);
