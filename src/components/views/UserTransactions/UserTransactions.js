import { useEffect } from "react";

import { connect } from "react-redux";

import Loader from "../../Loader";

import {
  transactionsOperations,
  transactionsActions,
} from "../../../redux/transactions";
import { useDispatch } from "react-redux";

const UserTransactions = ({
  amount,
  getAllTransactions,
  allTransactions,
  currentUserId,
  isLoading,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTransactions();
  }, [getAllTransactions]);

  useEffect(() => {
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
    dispatch(transactionsActions.setAmountSuccess(countBalance()));
  }, [allTransactions, currentUserId, dispatch]);

  return (
    <>
      <h2>User Transactions View</h2>
      {isLoading ? <Loader /> : <h3>Your balance is {amount} $</h3>}
    </>
  );
};

const mapStateToProps = (state) => ({
  allTransactions: state.transactions.allUsersTransactions,
  currentUserId: state.users.currentUser.id,
  isLoading: state.transactions.isLoading,
  amount: state.transactions.amount,
});

const mapDispatchToProps = {
  getAllTransactions: transactionsOperations.getAllTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTransactions);
