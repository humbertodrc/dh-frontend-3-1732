import { products } from "@/data/products"
import { DEFAULT_LOCALE } from "@/locale/constants"
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query: { lang } } = req
  
  // Hacemos la conexion a la base de datos y obtenemos los productos por el idioma
  const productsByLang = products[lang as keyof typeof products] ?? products[DEFAULT_LOCALE]

  res.status(200).json(productsByLang)
}