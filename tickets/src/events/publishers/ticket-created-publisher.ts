import { Publisher, Subjects, TicketCreatedEvent } from "@microsrvs/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject:TicketCreatedEvent['subject'] = Subjects.TicketCreated;
}
