import {brands, posts} from '../controller/index.controller';
const data1 = require('../resource/json/postdata.json')
const data2 =  require('../resource/json/putdata.json');
let obj = new brands();
let obj1 = new posts();

describe.only('GET Request', ()=>{
    it('GET Requests', async()=>{
        const res = await obj1.getData();
        console.log(res.body)
    })
})

//GET REQUEST
describe('GET Requests', ()=> {
    
    it('GET /brands', async()=>{
        const res = await obj.getPosts();
        console.log(res.body)
        expect(res.statusCode).toBe(200)
    })
})

describe('POST Request', () =>{
    it('POST /brands', async () => {
        const res = await obj.newPosts(data1);
        console.log(res.body);
        expect(res.statusCode).toBe(201)
    })
})

//NESTED FILE

describe('GET Request', () =>{
    it('GET /0', async()=>{
        const res = await obj.getdata()
        console.log(res.body.item[0])

    })
})

//let patchId;
describe('PATCH Request',() =>{
    it('PATCH /items', async() =>{
        const res= await obj.patchData(data2)
        console.log(res.body.item.orderno.orders[1]);
        //patchId = res.body.id;
        
    })
})
