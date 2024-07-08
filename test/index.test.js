import Requests from '../controller/index.controller';
describe('GET Request', () => {
    test('GET /posts', async () => {
        const res = await Requests.getPosts();
        console.log(res.body);
    })
})
