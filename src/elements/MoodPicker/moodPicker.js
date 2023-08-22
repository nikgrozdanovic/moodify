import Select from '@/components/Select'
import styles from './MoodPicker.module.scss'
import { useDispatch } from 'react-redux'
import { changeMood } from '@/redux/slices/moodSlice'
import Button from '@/components/Button'

const moods = [
  {
    label: 'Happy',
    value: 'happy',
  },
  {
    label: 'Energetic',
    value: 'energetic',
  },
  {
    label: 'Excited',
    value: 'excited',
  },
  {
    label: 'Sad',
    value: 'sad',
  },
  {
    label: 'Relaxed',
    value: 'relaxed',
  },
]

const MoodPicker = () => {
  const dispatch = useDispatch()
  const onChange = (e) => {
    dispatch(changeMood(e.target.value))
  }

  return (
    <div className={styles.container}>
      <div className={styles.select}>
        Set your mood: <Select options={moods} onChange={onChange} />
      </div>
    </div>
  )
}

export default MoodPicker
