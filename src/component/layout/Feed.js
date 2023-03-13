import React, { useCallback, useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import Header from '../header/Header';
import './Feed.scss';

const url = 'https://woong-backend.fly.dev/feed.json';

function fetchProducts({ queryKey, pageParam = 1 }) {
  return fetch(
    `${url}?keyword=${queryKey[0]}&pageNum=${pageParam}&amount=30&type=T`
  ).then((res) => res.json());
}

function Feed() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery([query], fetchProducts, {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.productions.length ? allPages.length + 1 : undefined;
    },
  });

  const loader = useRef(null);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  return (
    <>
      <Header />
      <div>
        <div class="grid grid-cols-4">
          {data?.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.productions.map((product) => (
                <article class="dis col-span-1" key={product.id}>
                  <div class="dis-img">
                    <a href="./feed">
                      <img src={product.image_url} alt={product.name} />
                    </a>
                  </div>

                  <div class="dis-info">
                    <a href="./feed">
                      <p>{product.maker_name}</p>
                      <h3>{product.goods_name}</h3>
                      <span class="price">{product.goods_price} KRW</span>
                    </a>
                  </div>
                </article>
              ))}
            </React.Fragment>
          ))}
        </div>
        {isFetching && <p>Loading…</p>}
        {error && <p>Error!</p>}
        {!hasNextPage && <p>No more data.</p>}
        <div ref={loader} />
      </div>
    </>
  );
}

export default Feed;
