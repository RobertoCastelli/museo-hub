import { formatDate } from "../Utils/formatDate";

function AdminEventsTable({ events, onEdit, onDelete }) {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Capacity</th>
          <th>Available</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{formatDate(event.date)}</td>
            <td>{event.max_capacity}</td>
            <td>{event.available_slots}</td>
            <td>{event.status}</td>
            <td>
              <div className="admin-table-actions">
                <button
                  className="admin-edit-button"
                  type="button"
                  onClick={() => onEdit(event)}
                >
                  edit
                </button>

                <button
                  className="admin-delete-button"
                  type="button"
                  onClick={() => onDelete(event.id)}
                >
                  delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminEventsTable;
