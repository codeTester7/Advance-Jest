// import Requests from '../controller/index.controller';
const config =  require('../configs/base.config');
const request = require(config.baseURL);
describe('GET Request', () => {
    test('GET /posts', async () => {
        const res = await request.get('/posts');
        console.log(res.body);
    })
})
