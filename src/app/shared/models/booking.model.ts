import { ITutor } from "./tutor.model";
import { IUser } from "./user.model";

export interface IBooking {
  id: number;
  accepted: boolean;
  paymentStatus:string;
  stripeSessionId :string;
  bookingDate :string;
  bookingFrom : string;
  bookingTo:string;
  student : IUser;
  tutor : ITutor;
}