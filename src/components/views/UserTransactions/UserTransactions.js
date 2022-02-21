import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { connect } from "react-redux";
// components
import Loader from "../../Loader";
import CustomTable from "../../Table";

// operations
import {
  transactionsOperations,
  transactionsActions,
} from "../../../redux/transactions";

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

  const transactionTo = allUserTransactions.map((item) => {
    return {
      to: item.to,
      amount: item.amount,
    };
  });

  const transactionFrom = allTransactionsToUser.map((item) => {
    return {
      from: item.from,
      amount: item.amount,
    };
  });

  const arrOfUserTransactions = [];
  const arrOfToUserTransactions = [];

  const makeTransactionsTo = (allTransactions, allProfiles) => {
    for (let i = 0; i < allTransactions.length; i += 1) {
      for (let j = 0; j < allProfiles.length; j += 1) {
        if (allTransactions[i].to === currentUserId) {
          continue;
        }
        if (allTransactions[i].to === allProfiles[j].user) {
          const transaction = {
            from: "Me",
            to: `${allProfiles[j].firstName} ${allProfiles[j].lastName}`,
            amount: allTransactions[i].amount,
          };

          arrOfUserTransactions.push(transaction);
        }
      }
    }
  };

  const makeTransactionsFrom = (allTransactions, allProfiles) => {
    for (let i = 0; i < allTransactions.length; i += 1) {
      for (let j = 0; j < allProfiles.length; j += 1) {
        if (allTransactions[i].from === currentUserId) {
          continue;
        }
        if (allTransactions[i].from === allProfiles[j].user) {
          const transaction = {
            to: "Me",
            from: `${allProfiles[j].firstName} ${allProfiles[j].lastName}`,
            amount: allTransactions[i].amount,
          };

          arrOfToUserTransactions.push(transaction);
        }
      }
    }
  };

  makeTransactionsTo(transactionTo, allProfiles);
  makeTransactionsFrom(transactionFrom, allProfiles);

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
              <CustomTable transactions={arrOfUserTransactions} />

              <CustomTable transactions={arrOfToUserTransactions} />
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

UserTransactions.propTypes = {
  amount: PropTypes.number.isRequired,
  getAllTransactions: PropTypes.func.isRequired,
  allTransactions: PropTypes.arrayOf(PropTypes.object.isRequired),
  currentUserId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  allProfiles: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTransactions);
