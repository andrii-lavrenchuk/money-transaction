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
  useEffect(() => {
    getAllTransactions();
  }, [getAllTransactions]);

  let totalBalance = 0;

  totalBalance = allTransactions.reduce((total, item) => {
    if (currentUserId === item.to) {
      return total + item.amount;
    }

    if (currentUserId === item.from) {
      return total - item.amount;
    }

    if (currentUserId === item.from && currentUserId === item.to) {
      return total + item.amount;
    }
    totalBalance = total;

    return totalBalance;
  }, totalBalance);

  console.log("UserTransactions");
  // useEffect(() => {
  //   setAmount(totalBalance);
  // }, [setAmount, totalBalance]);

  return (
    <>
      <h2>User Transactions View</h2>
      {isLoading ? <Loader /> : <h3>Your balance is {totalBalance} $</h3>}
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
