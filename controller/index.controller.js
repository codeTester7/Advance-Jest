const supertest = require('supertest');
// const request = supertest('https://jsonplaceholder.typicode.com');

const request = require('../configs/base.config');

class Requests {
    getPosts() {
        return request.get('/posts');
    }
}

export default new Requests();