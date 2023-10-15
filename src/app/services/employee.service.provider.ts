import { EmployeeService } from './employee.service';
import { LoggerService } from './logger.service';
const employeeServiceFactory = (logger:LoggerService) => new EmployeeService(logger,false);

export const employeeServiceProvider = {
    provide:EmployeeService,
    useFactory:employeeServiceFactory,
    deps:[LoggerService]
};