export { App } from './app.component';
import * as services from './services';
import 'rxjs/add/operator/map';
// Utility method to convert all the services to an array
// so that we dont have to pass it to botstarp everytime a new service is created

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
    ...mapValuesToArray(services)
];