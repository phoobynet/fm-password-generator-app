import styles from './Options.module.scss'
import Container from '@/components/PasswordGenerator/elements/Container'
import { usePasswordGeneratorStore } from '@/stores/usePasswordGeneratorStore'
import { ChangeEventHandler, KeyboardEventHandler } from 'react'

export default function Options() {
  const length = usePasswordGeneratorStore((state) => state.length)
  const setLength = usePasswordGeneratorStore((state) => state.setLength)
  const minLength = 8
  const maxLength = 20

  const onSliderChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const v = parseInt(e.target.value)

    if (isNaN(v)) {
      setLength(v)
    }
  }

  return (
    <Container>
      <div className={styles.options}>
        <div className={styles.length}>
          <div>Character Length</div>
          <div>{length}</div>
        </div>
        <div className={styles.lengthSlider}>
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={onSliderChange}
          />
        </div>
      </div>
    </Container>
  )
}
