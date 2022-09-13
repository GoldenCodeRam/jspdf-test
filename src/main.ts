import express from 'express';
import cors from 'cors';
import { generateFormato1Endpoint } from './server/formato1Endpoint';
import { generateEmployeeChecklistEndpoint } from './server/employeeChecklistEndpoint';
import { generateFuidEndpoint } from './server/fuidEndpoint';
import { generateTrdEndpoint } from './server/trdEndpoint';

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

generateFormato1Endpoint(app);
generateEmployeeChecklistEndpoint(app);
generateFuidEndpoint(app);
generateTrdEndpoint(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
