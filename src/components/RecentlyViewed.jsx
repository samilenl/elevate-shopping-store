import ItemCard from './ItemCard'

const RecentlyViewed = () => {

    const recently = localStorage.getItem("recently-viewed")
    const parsedList = recently ? JSON.parse(recently) : []

  return (
    <div className='recently-viewed-cont'>
        <p className='recently-viewed-hdr'>Recently Viewed</p>
        <div className='recent-items'>
            {parsedList.reverse().map((item) => <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />)}
        </div>
    </div>
  )
}

RecentlyViewed.propTypes = {}

export default RecentlyViewed