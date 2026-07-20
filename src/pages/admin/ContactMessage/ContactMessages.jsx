import { useEffect, useState } from "react";
import "./ContactMessages.css";
import {
  getAllMessages,
  deleteMessage,
  markAsReplied,
} from "../../../services/contactService";

function ContactMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const res = await getAllMessages();
      setMessages(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   here for delete Message
  const removeMessage = async (id) => {
    await deleteMessage(id);

    loadMessages();
  };

  //   here for mark as Read
  const handleMarkAsReplied = async (id) => {
    try {
      await markAsReplied(id);

      loadMessages(); // Refresh the table
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-admin-page">
      {/* Header */}
      <div className="contact-header">
        <div>
          <h2>📩 Contact Messages</h2>
          <p>Manage all messages sent from your website.</p>
        </div>

        <div className="contact-count">
          <span>{messages.length}</span>
          <small>Total Messages</small>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="contact-table-container">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {messages.length > 0 ? (
              messages.map((msg) => (
                <tr key={msg._id}>
                  <td>{msg.name}</td>

                  <td>{msg.email}</td>

                  <td>{msg.subject}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        msg.status === "New" ? "new" : "replied"
                      }`}
                    >
                      {msg.status}
                    </span>
                  </td>

                  <td>{new Date(msg.createdAt).toLocaleDateString()}</td>

                  <td>
                    <div className="action-buttons">
                      {msg.status === "New" ? (
                        <button
                          className="reply-btn"
                          onClick={() => handleMarkAsReplied(msg._id)}
                        >
                          Mark Replied
                        </button>
                      ) : (
                        <button className="done-btn" disabled>
                          ✔ Replied
                        </button>
                      )}

                      <button
                        className="delete-btn"
                        onClick={() => removeMessage(msg._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="empty-message">
                  📭 No Contact Messages Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="mobile-contact-list">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div className="contact-card" key={msg._id}>
              <div className="card-top">
                <h3>{msg.name}</h3>

                <span
                  className={`status-badge ${
                    msg.status === "New" ? "new" : "replied"
                  }`}
                >
                  {msg.status}
                </span>
              </div>

              <div className="card-body">
                <p>
                  <strong>Email:</strong>
                  <br />
                  {msg.email}
                </p>

                <p>
                  <strong>Subject:</strong>
                  <br />
                  {msg.subject}
                </p>

                <p>
                  <strong>Date:</strong>
                  <br />
                  {new Date(msg.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="card-actions">
                {msg.status === "New" ? (
                  <button
                    className="reply-btn"
                    onClick={() => handleMarkAsReplied(msg._id)}
                  >
                    Mark Replied
                  </button>
                ) : (
                  <button className="done-btn" disabled>
                    ✔ Replied
                  </button>
                )}

                <button
                  className="delete-btn"
                  onClick={() => removeMessage(msg._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-card">
            <h3>📭 No Messages</h3>
            <p>No contact messages available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactMessages;
