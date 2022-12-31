import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data/data'
import { IProduct } from '../../Interfaces/products'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(
    data
    )
}
