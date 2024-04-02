import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import ProductCard from "./ProductCard";
import Loader from './Loader'

const InfiniteScrollExample1 = () => {
  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [index, setIndex] = useState(2)

  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/products?offset=10&limit=12')
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
  }, [])

  const fetchMoreData = () => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
      .then(res => {
        setItems(prevItems => [...prevItems, ...res.data])

        res.data.length > 0 ? setHasMore(true) : setHasMore(false)
      })
      .catch(err => console.log(err))

    setIndex(prevIndex => prevIndex + 1)
  }

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loader />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div class={`container  mx-auto px-4 md:px-12 ${items.length > 0 ? 'my-12' : ''}`}>
        <div class='grid grid-cols-2 md:grid-cols-4 -mx-1 lg:-mx-4 gap-5'>
          {items &&
            items.map((item, index) => {
              return (
                <>
                  <ProductCard data={item} />
                </>
              )
            })}
        </div>
      </div>
    </InfiniteScroll>
  )
}

export default InfiniteScrollExample1
