import * as supertest from 'supertest';
import baseConfig from '../config/base.config';
import { id } from '../jest.config';
const request = supertest(baseConfig.baseUrl)
const request1 = supertest(baseConfig.newUrl)


export class posts{
    getData(){
        return request.get('/posts')
    }
}



export class brands{
    getPosts(){
        return request1.get('/brands')
    }
    newPosts(data1){
        return request1.post('/brands').send(data1);
    }
    getdata(){
    return request1.get('/0')
    }
    patchData(patchdata){
    return request1.patch('/0').send(patchdata)
    }
    // delectData(orderID){
    //     return request1.delete('/0/'+orderID)
    // }

}

