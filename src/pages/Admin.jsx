import "./Admin.css";

import { useEffect, useState }
from "react";

import axios from "axios";

function Admin() {

  const [volunteers, setVolunteers] =
    useState([]);

  useEffect(() => {

    fetchVolunteers();

  }, []);

  const fetchVolunteers =
    async () => {

      try {

        const response =
          await axios.get(
            "https://nayepankh-premium.onrender.com/volunteers"
          );

        setVolunteers(
          response.data
        );

      }

      catch (error) {

        console.log(error);

      }

    };

    const deleteVolunteer =
  async (id) => {

    try {

      await axios.delete(
        `https://nayepankh-premium.onrender.com/volunteer/${id}`
      );

      fetchVolunteers();

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="admin">

      <h1>
        Volunteer Dashboard
      </h1>

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Message</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {
              volunteers.map((item) => (

                <tr key={item._id}>

                  <td>{item.name}</td>

                  <td>{item.email}</td>

                  <td>{item.phone}</td>

                  <td>{item.message}</td>

                  <td>

  <button
    className="delete-btn"

    onClick={() =>
      deleteVolunteer(item._id)
    }
  >
    Delete
  </button>

</td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default Admin;