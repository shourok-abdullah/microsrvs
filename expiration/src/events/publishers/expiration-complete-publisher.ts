import { Publisher, ExpirationCompleteEvent, Subjects} from '@microsrvs/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
  subject: ExpirationCompleteEvent['subject'] = Subjects.ExpirationComplete;
}