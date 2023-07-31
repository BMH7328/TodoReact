export const AddFrom = (props) => {
    return (
      <div>
        <div className="mt-4">
          <form className="d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Add new item..."
              required
            />
            <button onClick={`btn btn-${props.color} btn-sm rounded ms-2`}>{props.button}</button>
          </form>
        </div>
      </div>
    );
  };