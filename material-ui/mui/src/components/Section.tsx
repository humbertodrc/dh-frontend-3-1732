
interface SectionProps {
  title: string;
  description: string;
  backgroundColor?: string;
}

export default function Section({ title, description, backgroundColor }: SectionProps) {
  return (
    <section style={{background: backgroundColor}}>
      <h2 >{title}</h2>
      <p>{description}</p>
    </section>
  )
}