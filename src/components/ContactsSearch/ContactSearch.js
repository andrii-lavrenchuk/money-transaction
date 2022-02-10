import { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { usersOperations } from "../../redux/users";

const ContactSearch = ({ contactSearch }) => {
  const [value, setValue] = useState("");

  const onSearch = () => {
    if (value.trim() === "") {
      toast.error("Please, fill the field");
      return;
    }
    contactSearch(value);

    setValue("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter user email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </>
  );
};

const mapDispatchToProps = {
  contactSearch: usersOperations.searchContact,
};

export default connect(null, mapDispatchToProps)(ContactSearch);
