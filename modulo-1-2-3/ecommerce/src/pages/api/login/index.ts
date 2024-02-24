import { USERS } from "@/data/users";
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const {email, password} = req.body;

  // Aca se pueden hacer llamadas a la base de datos, autenticaciones, etc.
  const user = USERS.find((user) => user.email === email && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Usario no valido' });
  }

  // Esta linea establece una cookie en el navegador del usuario, los parametros adicionales son para establecer la seguridad de la cookie, lax indica que la cookie solo se enviara si la peticion es GET, httponly indica que la cookie no puede ser leida por javascript
  res.setHeader('set-cookie', 'access=true; path=/; semesite=lax; httponly');

  res.status(200).json({ message: 'Usuario logeado' });
}