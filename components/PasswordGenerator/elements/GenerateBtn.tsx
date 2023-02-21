import styles from '@/components/GenerateBtn.module.scss'
import { ButtonHTMLAttributes } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {}

export default function GenerateBtn(props: Props) {
  return (
    <button
      {...props}
      className={styles.generateBtn}
    >
      <span>generate</span>
      <AiOutlineArrowRight />
    </button>
  )
}
