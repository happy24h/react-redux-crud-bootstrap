import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import * as userService from "../services/userService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../redux/actions";

function Home() {
  //   const [data, setData] = useState([]);
  let dispatch = useDispatch();
  let { users } = useSelector((state) => state.data);
  console.log("check users >>>>", users);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    console.log("check submit delete: ");

    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không ?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div style={{ width: 1200, margin: "0 auto" }}>
      <Link to={"/add-user"}>
        <Button variant="primary" style={{ margin: "25px 0" }}>
          Add User
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.length > 0 &&
            users.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={`edit-user/${item.id}`}>
                      <Button variant="primary">Edit</Button>{" "}
                    </Link>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
