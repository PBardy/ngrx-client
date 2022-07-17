import { IModel } from './model.interface';

export interface INotification extends IModel {
  title: string;
  body: string;
  icon: string;
  link: string;
  priority: number;
}
