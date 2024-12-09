import http from 'http';
import app from './app';
const httpServer = http.createServer(app);

const PORT = 3001;

const startServer = async () => {
    httpServer.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();
 
