import { nanoid } from 'nanoid'
const GifGridItem = ({title, url, id}) => {

    return (
    <div className='card'>
      <img src={url} alt={title} />
      <h5>{title}</h5>
    </div>
  )
}

export default GifGridItem