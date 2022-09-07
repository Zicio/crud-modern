export interface IService {
  id?: number;
  name: string;
  price: string;
  content: string;
}

export interface IFormProps {
  clear: boolean;
  form: IService;
  handleFetch: React.FormEventHandler<HTMLFormElement>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
