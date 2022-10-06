import { OrderStatus } from '@microsrvs/common';
import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface OrderAttrs {
  id: string,
  price: number,
  version: number,
  userId: string,
  status: OrderStatus;
}
interface OrderDoc extends mongoose.Document{
  price: number,
  version: number,
  userId: string,
  status: OrderStatus;
}
interface OrderModel extends mongoose.Model<OrderDoc>{
  build(attrs: OrderAttrs): OrderDoc;
}
const OrderSchema = new mongoose.Schema({
  userId:{
    type: String,
  required: true,
  },
  price: {
    type: Number,
    required :true,
  },
  status: {
    type: String,
    required: true,
  },
  
},{
  toJSON: {
    transform(rec, ret){
      ret.id = ret._id,
      delete ret._id
    }
  }
});
OrderSchema.set('versionKey','version');
OrderSchema.plugin(updateIfCurrentPlugin);

OrderSchema.statics.build = (attrs: OrderAttrs) => {
  return new Order({
    _id: attrs.id,
    version: attrs.version,
    status: attrs.status,
    userId: attrs.userId,
    price: attrs.price,
  });
};

const Order =  mongoose.model<OrderDoc, OrderModel>('Orders', OrderSchema);

export { Order};