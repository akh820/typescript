import { useContext } from "react";
import { TodoDispatchContext } from "../contexts/index";

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext에 문제가있다");
  return dispatch;
}
