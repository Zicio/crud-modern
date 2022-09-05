export interface IService {
  id?: number;
  name: string;
  price: string;
  content: string;
}

export interface IFormProps {
  form: IService;
  handleModify: React.FormEventHandler<HTMLFormElement>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
