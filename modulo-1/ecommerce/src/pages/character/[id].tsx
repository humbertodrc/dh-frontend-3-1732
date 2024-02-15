import { useRouter } from "next/router"

export default function CharacterPage() {

  const { query } = useRouter()
  
  // Hacer un fetch del lado del cliente y buscar character por id


  return (
    <div>Esta es la pagina del character con el id: {query.id}</div>
  )
}