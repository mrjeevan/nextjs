import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data/data'
import {IProduct} from '../../Interfaces/products'
// type Data = {IProduct}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  res.status(200).json(data)
}
