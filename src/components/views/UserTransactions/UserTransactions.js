import { useEffect } from "react";

import { connect } from "react-redux";

import Loader from "../../Loader";
import CustomTable from "../../Table";

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
  allProfiles,
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

  const allUserTransactions = allTransactions.filter(
    (item) => item.from === currentUserId
  );
  const allTransactionsToUser = allTransactions.filter(
    (item) => item.to === currentUserId
  );

  const transactionFrom = allUserTransactions.map((item) => {
    return {
      to: item.to,
      amount: item.amount,
    };
  });
  const transactionTo = allTransactionsToUser.map((item) => {
    return {
      from: item.from,
      amount: item.amount,
    };
  });

  const transactions = {
    from: "",
    to: "",
    amount: 0,
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5">
              <h2 className="pb-4">My transactions </h2>
              <h3>Your balance is {amount} $</h3>
            </div>
            <div className="col-lg-6 pt-5">
              <CustomTable />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  allProfiles: state.users.allProfiles.profiles,
  allTransactions: state.transactions.allUsersTransactions,
  currentUserId: state.users.currentUser.id,
  isLoading: state.transactions.isLoading,
  amount: state.transactions.amount,
});

const mapDispatchToProps = {
  getAllTransactions: transactionsOperations.getAllTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTransactions);
