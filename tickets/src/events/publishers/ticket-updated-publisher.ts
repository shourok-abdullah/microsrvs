import { Publisher, Subjects, TicketUpdatedEvent } from "@microsrvs/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}