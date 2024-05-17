import { TypeAnimation } from 'react-type-animation'

const fallbackInputs = [
  'Full-Stack TypeScript Developer',
  1000,
  'Open-Source Contributor',
  1000,
  'Teacher',
  1000,
  'Husband',
  1000,
  'Father',
  1000,
  'Moslem',
  1000
]

export interface TextRunningProps {
  /**
   * @default {@link fallbackInputs}
   */
  inputs?: (string | number)[]
}

export const TextRunning = <PropType extends TextRunningProps = TextRunningProps>({ inputs = fallbackInputs }: PropType) => {
  return (
    <TypeAnimation sequence={inputs} repeat={Infinity} wrapper='h2' />
  )
}
