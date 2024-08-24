import styles from '../Search.module.scss'
import { useStore } from '@/store/questionStore/useStore';

export function SortBox() {

  const { sort, setSort } = useStore();

  return (
    <>
        <div className={styles.searchSort}>
          <select value={sort} name="select" id="select" onChange={(e) => setSort(e.target.value)}>
            <option value="creation">По дате</option>
            <option value="votes">По голосу</option>
            <option value="activity">По активности</option>
          </select>
        </div>
    </>
  )
}
