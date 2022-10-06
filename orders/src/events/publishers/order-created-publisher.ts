import { Publisher, OrderCreatedEvent, Subjects } from "@microsrvs/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
