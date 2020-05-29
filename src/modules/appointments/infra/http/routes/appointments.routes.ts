import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '../controllers/AppointmentController'
import AppointmentsRepository from '../../typeorm/repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentController()

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create)

export default appointmentsRouter;
