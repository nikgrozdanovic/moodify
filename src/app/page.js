'use client'
import { useAppSelector } from '@/redux/store'
import styles from './page.module.css'
import MoodPicker from '@/elements/MoodPicker/moodPicker'
import SongsList from '@/elements/SongsList/songsList'

export default function Home() {
  const mood = useAppSelector((state) => state.moodSliceReducer.mood)
  return (
    <main className={styles.main}>
      <div className={styles.title}>Welcome to Moodify!🎉</div>
      <MoodPicker />
      <SongsList />
    </main>
  )
}
