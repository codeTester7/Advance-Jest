import controller from '../controller/index.controller'
const data1 = require('../resource/json/postdata.json')
const data2 =  require('../resource/json/putdata.json');

//GET REQUEST
describe.only('GET Requests', ()=> {
    
    it('GET /brands', async()=>{
        const res = await controller.getPosts()
        console.log(res.body)
        expect(res.statusCode).toBe(200)
    })
})

describe.only('POST Request', () =>{
    it('POST /brands', async () => {
        const res = await controller.newPosts(data1);
        console.log(res.body);
        expect(res.statusCode).toBe(201)
    })
})

//NESTED FILE

describe('GET Request', () =>{
    it('GET /0', async()=>{
        const res = await controller.getdata()
        console.log(res.body.orders[1])

    })
})

describe('PUT Request',() =>{
    it('PATCH /0', async() =>{
        const res= await controller.patchData(data2)
        console.log(res.body);
        
    })
})