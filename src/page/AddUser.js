import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
function AddUser() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });
  const dispatch = useDispatch();
  let history = useNavigate();

  const handleInputOnchange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !address) {
      alert("Vui lòng nhập đầy đủ thông tin !");
    } else {
      dispatch(addUser(state));
      history("/");
    }
  };

  let { firstName, lastName, email, address } = state;
  // console.log("check state input:", state);
  return (
    <div style={{ width: 300, margin: "0 auto" }}>
      <Form>
        <Link to={"/"}>
          <Button variant="secondary" type="submit" className="my-4">
            Back
          </Button>
        </Link>

        <Form.Control
          name="firstName"
          value={firstName}
          className="mb-4"
          type="text"
          placeholder="First name"
          onChange={handleInputOnchange}
        />
        <Form.Control
          value={lastName}
          name="lastName"
          className="mb-4"
          type="text"
          placeholder="Last name"
          onChange={handleInputOnchange}
        />
        <Form.Control
          value={email}
          name="email"
          className="mb-4"
          type="email"
          placeholder="Email"
          onChange={handleInputOnchange}
        />
        <Form.Control
          value={address}
          name="address"
          className="mb-4"
          type="text"
          placeholder="Address"
          onChange={handleInputOnchange}
        />

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Add User
        </Button>
      </Form>
    </div>
  );
}

export default AddUser;
