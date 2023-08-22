import { useAppSelector } from '@/redux/store'
import styles from './SongsList.module.scss'
import { useDispatch } from 'react-redux'
import { songsData } from '@/mockData/data'
import Button from '@/components/Button'
import { addSong, removeSong } from '@/redux/slices/moodSlice'
import { useState } from 'react'

const SongsList = () => {
  const [newSong, setNewSong] = useState('')
  const dispatch = useDispatch()
  const { mood, songs } = useAppSelector((state) => state.moodSliceReducer)

  const onInputChange = (e) => {
    setNewSong(e.target.value)
  }

  const handleRemoveSong = (songName) => {
    dispatch(removeSong({ name: songName }))
  }

  const handleSongSubmit = () => {
    if (newSong.trim() === '') {
      return // Prevent adding empty songs
    }
    dispatch(addSong({ mood: mood, name: newSong }))
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inputDiv}>
          <input className={styles.inputField} onChange={onInputChange} />
          <Button
            className={`button ${styles.button}`}
            onClick={handleSongSubmit}
          >
            Add
          </Button>
        </div>

        {mood &&
          songs[mood]?.map((song, i) => (
            <div key={i} className={styles.songList}>
              <p className={styles.songP}>{song}</p>
              <Button
                className={`button ${styles.removeButton}`}
                onClick={() => handleRemoveSong(song)}
              >
                Remove
              </Button>
            </div>
          ))}
      </div>
    </>
  )
}

export default SongsList
