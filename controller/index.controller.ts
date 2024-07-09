const supertest = require('supertest');
// const request = supertest('https://jsonplaceholder.typicode.com');

const request = require('../configs/qa.config');

class Requests {
    getPosts() {
        return request.get('/posts');
    }
}

export default new Requests();