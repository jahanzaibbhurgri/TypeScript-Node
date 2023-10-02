import {Prisma, PrismaClient} from '@prisma/client'
import express from 'express';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post('/',async(req:any,res:any)=> {

try
{
 const user = await prisma.users.create({
    data: req.body
 });
 res.status(200).json(user);
}
catch(err)
{
    res.status(500).json(null);
}
});

const PORT : any =  3000;
app.listen(PORT,()=>{

    console.log('Drone running on port | ${PORT}|');
});