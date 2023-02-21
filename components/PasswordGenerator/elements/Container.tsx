import styles from './Container.module.scss'
import { PropsWithChildren } from 'react'

export default function Container({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>
}
