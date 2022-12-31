import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data/data'

type Data = any

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    x:"data is not proper"
  })
}
