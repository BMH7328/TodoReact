// import { AddItem } from "./todoitem";
// import { AddFrom } from "./addtodoform";
import { useState } from "react";
// const todos = [
//   {
//     id: 1,
//     text: "Task 1",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Task 2",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "Task 3",
//     isCompleted: false,
//   },
// ];
export const Add = (props) => {
  const [input, setInput] = useState("");
  // const [checkList, setCheckList] = useState([]);
  const [list, setList] = useState([]);
  // const addButton = () => {
  //   setList([...list, input]);
  //   setInput("");
  // };
  // const removeButton = () => {
  //   const otherList = [...newList];
  //   otherList.filter(newList.id);
  //   setList(otherList);
  // };
  // (xh method)
  // const editButton = (id) => {
  //   if(checkList.includes(id)) setCheckList(checkList.filter(i => i != id))
  //   else setCheckList([...checkList,id])
  //   console.log(checkList);
  // }
  return (
    <div className="card rounded shadow-sm m-5">
      <div className="card-body">
        <h3 className="card-title mb-3">{props.title}</h3>
        <ul className="list-group">
          {/* {todos.map((todo) => {
            return <AddItem key={todo.id} todo={todo} />;
          })} */}
          {list.map((item, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={index}
            >
              {/* <div> (xh method)
                <button className={`btn btn-sm ${(checkList.includes(item.id))? "btn-success" : "btn-light"}`} onClick={()=>editButton(item.id)}>
                  <i className={`${(checkList.includes(item.id))? "bi bi-check-square" : "bi bi-square"}`} onClick={()=>editButton(item.id)}></i>
                </button>
                <span className={`ms-2 ${(checkList.includes(item.id))? "text-decoration-line-through" : " "}`} onClick={()=>editButton(item.id)}>{item.text}</span>
              </div> */}
              <div>
                <button
                onClick={() => {
                  const newEditList = list.map((icon) => {
                    // only update the selected icon
                    if (icon.id === item.id) {
                      const newIcon = { ...icon };
                      if (icon.isCompleted === true){
                        newIcon.isCompleted = false;
                      }else if (icon.isCompleted === false){
                        newIcon.isCompleted = true;
                      }
                      return newIcon;
                    } else {
                      return icon;
                    }
                  });
                  setList(newEditList);
                }}
                  className={`btn btn-sm ${
                    item.isCompleted ? "btn-success" : "btn-light"
                  }`}
                >
                  <i
                    className={`bi ${
                      item.isCompleted ? "bi-check-square" : "bi-square"
                    }`}
                  ></i>
                </button>
                {item.isCompleted ? (
                  <span className="ms-2 text-decoration-line-through">
                    {item.text}
                  </span>
                ) : (
                  <span className="ms-2">{item.text}</span>
                )}
              </div>
              <button
                onClick={() => {
                  const OtherList = list.filter((list) => list.id !== item.id);
                  setList(OtherList);
                }}
                className="btn btn-sm btn-danger"
              >
                <i className="bi bi-trash"></i>
              </button>
            </li>
          ))}
          <div className="mt-4">
            <form
              className="d-flex justify-content-between align-items-center"
              onSubmit={(event) => {
                event.preventDefault();
                const newList = [...list];
                newList.push({
                  id: Math.random(),
                  text: input,
                  isCompleted: false,
                });
                setList(newList);
                setInput("");
              }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Add new item..."
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                }}
              />
              <button
                // onClick={addButton}
                className="btn btn-primary btn-sm rounded ms-2"
              >
                Add
              </button>
            </form>
          </div>
        </ul>
      </div>
    </div>
  );
};
  
  
  
  
  
  
  
  