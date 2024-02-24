import { faqs } from "@/data/faqs";
import { Faq } from "@/interface"
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Faq[] | { message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  // Consultar el metodo de la peticion
  if (req.method === 'GET') {
    // Se puede hacer una consulta a la base de datos, un archivo, etc.
    res.status(200).json(faqs)
  } else {
    res.status(405).json({ message: 'Metodo no permitido' });
  }

}