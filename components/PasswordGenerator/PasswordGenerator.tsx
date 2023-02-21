import styles from './PasswordGenerator.module.scss'
import Options from './elements/Options'
import Password from './elements/Password'
import { usePasswordGeneratorStore } from '@/stores/usePasswordGeneratorStore'
import { useEffect } from 'react'

export default function PasswordGenerator() {
  const generatePassword = usePasswordGeneratorStore(
    (state) => state.generatePassword,
  )

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  return (
    <div className={styles.passwordGenerator}>
      <header>
        <h1>Password Generator</h1>
      </header>
      <Password />
      <Options />
    </div>
  )
}
