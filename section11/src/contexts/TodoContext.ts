import React from "react";
import { Todo } from "../types";

export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export const TodoStateContext = React.createContext<Todo[] | null>(null);
