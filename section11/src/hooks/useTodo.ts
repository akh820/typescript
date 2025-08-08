import { useReducer, useRef } from "react";
import { reducer } from "../reducers/todoReducer";

export function useTodo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  return {
    todos,
    onClickAdd,
    onClickDelete,
  };
}