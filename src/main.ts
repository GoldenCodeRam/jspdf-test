import express from 'express';
import cors from 'cors';
import { generateFormato1Endpoint } from './server/formato1Endpoint';
import { generateEmployeeChecklistEndpoint } from './server/employeeChecklistEndpoint';

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

generateFormato1Endpoint(app);
generateEmployeeChecklistEndpoint(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
