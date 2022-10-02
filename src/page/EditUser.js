import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getUsers } from "../redux/actions";

function EditUser() {
  const [state, setState] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  let dispatch = useDispatch();
  let history = useNavigate();
  let { id } = useParams();
  let { users } = useSelector((state) => state.data);
  const result = users.filter((user) => user.id === +id);

  useEffect(() => {
    if (result[0]) {
      setState({ ...result[0] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputOnchange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, id: id, [name]: value });
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !address) {
      alert("Vui lòng nhập đầy đủ thông tin !");
    } else {
      dispatch(editUser(state));
      history("/");
    }
  };

  let { firstName, lastName, email, address } = state;
  return (
    <div style={{ width: 300, margin: "0 auto" }}>
      <Form>
        <Link to={"/"}>
          <Button variant="dark" type="submit" className="my-4">
            Back
          </Button>
        </Link>

        <Form.Control
          onChange={handleInputOnchange}
          value={firstName}
          name="firstName"
          className="mb-4"
          type="text"
          placeholder="First name"
        />
        <Form.Control
          onChange={handleInputOnchange}
          value={lastName}
          name="lastName"
          className="mb-4"
          type="text"
          placeholder="Last name"
        />
        <Form.Control
          onChange={handleInputOnchange}
          value={email}
          name="email"
          className="mb-4"
          type="email"
          placeholder="Email"
        />
        <Form.Control
          onChange={handleInputOnchange}
          value={address}
          name="address"
          className="mb-4"
          type="address"
          placeholder="Address"
        />

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default EditUser;
