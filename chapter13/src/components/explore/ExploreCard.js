import styles from './ExploreCard.module.css'

// JSX식 표기방법 <a href={`https://www.youtube.com/watch?v=${data.id}`}>
// JSX식 표기방법 <a href={`https://www.youtube.com/channel/${data.channelId}`}

function ExploreCard({data}) {
  return (
    <div>
      { data.title.includes("아이폰") === true &&
      <>
        <a href={'https://www.youtube.com/watch?v=' + data.id}>
        <div className={styles.card}>
        <img src={data.thumbnail} className={styles.thumbnail} alt={data.title + '의 썸네일'} />
        <div className={styles.info}>
          <div className={styles.title}> {data.title} </div>
          <div className={styles.meta}> <a href={'https://www.youtube.com/channel/' + data.channelId} className={styles.uploader}> {data.channelTitle} </a>
          <div className={styles.view}> {data.viewCount} </div>
          <div className={styles.time}> {data.date} </div>
          </div>
          <div className={styles.desc}>{data.description}</div>
          </div>
        </div>
      </a>
      </>
    }
    </div>
  );
}

export default ExploreCard;
