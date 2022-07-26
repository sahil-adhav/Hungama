// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   if(req.method === 'POST') {
    const user = req.body;

    //if user is not created then create a new user (inside SANITY_CLIENT)
    client.createIfNotExists(user)
        .then(() => res.status(200).json('Login success')) 
   }
}
