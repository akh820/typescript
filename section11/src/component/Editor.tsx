import { ReactElement, useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
  //   children: ReactElement;
}

export default function Editor(props: Props) {
  const [text, setText] = useState(""); // 초기값으로 설정한 마땅한값이 없을때는 <type>설정

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
