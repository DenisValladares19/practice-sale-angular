export interface ClientDTO {
  id?: number;
  name: string;
  lastname: string;
  age: number;
  birthDay: string;
  user: UserDTO;
}

export interface ClientFormDTO extends ClientDTO, UserDTO {}

export interface UserDTO {
  id?: number;
  email: string;
  password: string;
}
