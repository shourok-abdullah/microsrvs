import { Subjects, Publisher, PaymentCreatedEvent } from "@microsrvs/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
