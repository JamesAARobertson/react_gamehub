import create from "./http-service";

export interface User {
    id: number;
    name: string;
  }

  const userService = create("/users");

export default create("/users")