import React, { useContext } from "react";

import { TodoContext } from "./TodoContext";

export const useTodo = ()=> useContext(TodoContext)