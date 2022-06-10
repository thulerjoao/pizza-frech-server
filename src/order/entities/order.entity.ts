import { Product } from "src/product/entities/product.entity";
import { Table } from "src/table/entities/table.entity";
import { User } from "src/user/entities/user.entity";


export class Order {
  id?: String;
  createdAt?: Date;
  updatedAt?: Date;
  user?: User;
  table?: Table;
  products?: Product[];
}
