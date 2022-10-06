import { Subjects, Publisher, OrderCancelledEvent } from "@microsrvs/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
