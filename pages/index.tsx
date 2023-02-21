import PasswordGenerator from '@/components/PasswordGenerator'
import styles from '@/styles/index.module.scss'

export default function Index() {
  return (
    <div className={styles.index}>
      <PasswordGenerator />
    </div>
  )
}
