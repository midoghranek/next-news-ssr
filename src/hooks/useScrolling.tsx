import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ADD_POSTS } from "states";

const useScrolling = ({ postsData, page }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    dispatch({
      type: ADD_POSTS,
      payload: postsData,
    });
  }, [page]);

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const lastPostLoaded: any /* wtf dude */ = document.querySelector(
      ".posts > article:last-child"
    );
    if (lastPostLoaded) {
      const lastPostLoadedOffset =
        lastPostLoaded.offsetTop + lastPostLoaded.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastPostLoadedOffset) {
        if (!loading) {
          const query = router.query;
          query.page = page + 1;
          router.replace(
            {
              pathname: router.pathname,
              query: query,
            },
            undefined,
            { scroll: false }
          );
        }
      }
    }
  };

  return {
    loading,
  };
};

export default useScrolling;
