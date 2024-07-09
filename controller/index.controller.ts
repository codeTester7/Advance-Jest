import * as supertest from 'supertest';
import baseConfig from '../config/base.config';
const request = supertest(baseConfig.newUrl)



class brands{
    getPosts(){
        return request.get('/brands')
    }
    newPosts(data1){
        return request.post('/brands').send(data1);
    }
    getdata(){
    return request.get('/0')
    }
    patchData(patchdata){
    return request.patch('/0').send(patchdata)
    }

}
export default new brands()

