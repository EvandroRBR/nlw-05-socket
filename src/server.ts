import { http } from './http';
import './websocket/client';
import './websocket/admin';

http.listen(1000, () => console.log('Server is Running!!'));
