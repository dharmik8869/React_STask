import React, { useState } from 'react';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    profilePic: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // null means add mode

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.profilePic) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex === null) {
      // Add new user
      setUsers([...users, form]);
    } else {
      // Edit existing user
      const updatedUsers = [...users];
      updatedUsers[editIndex] = form;
      setUsers(updatedUsers);
      setEditIndex(null); // reset to add mode
    }

    setForm({ firstName: '', lastName: '', profilePic: '' });
    setShowModal(false);
  };

  const deleteUser = (index) => {
    const updated = [...users];
    updated.splice(index, 1);
    setUsers(updated);
  };

  const editUser = (index) => {
    const userToEdit = users[index];
    setForm(userToEdit);
    setEditIndex(index);
    setShowModal(true);
  };

  return (
    <div>
      <h2>User Management</h2>
      <button onClick={() => {
        setForm({ firstName: '', lastName: '', profilePic: '' });
        setEditIndex(null); // ensure it's in add mode
        setShowModal(true);
      }}>
        + Add New User
      </button>

      {/* Modal */}
      {showModal && (
        <div>
          <div>
            <h3>{editIndex === null ? "Add User" : "Edit User"}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="profilePic"
                placeholder="Profile Picture URL"
                value={form.profilePic}
                onChange={handleChange}
              />
              <div>
                <button type="submit">{editIndex === null ? "Add" : "Update"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <table border="1" cellPadding="10" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr><td colSpan="4">No users added</td></tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={user.profilePic}
                    alt="profile"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <button onClick={() => deleteUser(index)}>Delete</button>
                  <button onClick={() => editUser(index)}>Edit</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
