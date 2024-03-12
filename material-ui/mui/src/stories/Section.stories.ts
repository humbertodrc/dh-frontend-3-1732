import Section from "../components/Section"
import { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Section",
  component: Section,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Section>

export default meta

type Story = StoryObj<typeof meta>


export const Primary: Story = {
  args: {
    title: "Hola soy un section",
    description: "Hola soy una descripción"
  }
}