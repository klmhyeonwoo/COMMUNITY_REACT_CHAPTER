import Layout from '../components/shared/Layout';
import styles from './Explore.module.css';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../data/youtubeData.json';
import ExploreCard from '../components/explore/ExploreCard';

function Explore() {

  return (
    <Layout activeMenu="explore">
    <div class = {styles.category}>
      <button value="data" className={styles.button}> 전체 </button>
      <button value="LISA" className={styles.button}> LISA </button>
      <button value="BTS" className={styles.button}> BTS </button>
      <button value="아이폰" className={styles.button} > 아이폰 </button>
    </div>

    <ContentsLayout>
    {youtubeData['data'].map(function (data, index) {
      return <ExploreCard key={index.toString()} data={data}/>}
    )}
    </ContentsLayout>
    </Layout>
    // {mapFunction('모각코', 0)} 과 같은 꼴
  );
}
export default Explore;
