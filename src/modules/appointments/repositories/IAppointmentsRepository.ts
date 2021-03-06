import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
