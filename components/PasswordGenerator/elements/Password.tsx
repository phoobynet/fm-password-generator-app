import styles from './Password.module.scss'
import Container from '@/components/PasswordGenerator/elements/Container'
import { usePasswordGeneratorStore } from '@/stores/usePasswordGeneratorStore'
import { FaRegCopy } from 'react-icons/fa'

export default function Password() {
  const password = usePasswordGeneratorStore((state) => state.password)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password)
  }

  return (
    <Container>
      <div className={styles.password}>
        <div className={styles.text}>{password}</div>
        <FaRegCopy
          className={styles.icon}
          onClick={copyToClipboard}
        />
      </div>
    </Container>
  )
}
