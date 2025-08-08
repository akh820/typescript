import { useTodoDispatch } from "../hooks/useTodoDispatch";
import { Todo } from "../types";

interface Props extends Todo {}

export default function TodoItems(props: Props) {
  const dispatch = useTodoDispatch();
  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };
  return (
    <>
      <div>
        {props.id}번 : {props.content}
        <button onClick={onClickButton}>삭제</button>
      </div>
    </>
  );
}
