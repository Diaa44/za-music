import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { loadGenres } from "services/api";
import { ChevronLeft, ChevronRight } from "components/ui/Icons/index.js";
import { SectionSubTitle } from "components/ui/Typography";
import GenresCard from "./GenresCard";
import {
  Wrapper,
  TitleRow,
  ButtonsWrapper,
  Button,
  GenresWrapper,
  GenreSkeletonWrapper,
} from "./styled";
import { breakpoints } from "styles/BreakPoints";
import { useWindowSize } from "hooks/useWindowSize";

function Genres() {
  const { width } = useWindowSize();
  const [genres, setGenres] = useState(); // Corrected the function name here
  const [isLoading, setIsLoading] = useState(false);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await loadGenres();
        setGenres(data); // Corrected the function name here
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);
  console.log(genres);
  return (
    <Wrapper>
      <TitleRow>
        <SectionSubTitle>Genres</SectionSubTitle>
        <ButtonsWrapper>
          <Button withBackground width={36} height={36} onClick={handlePrev}>
            <ChevronLeft />
          </Button>
          <Button withBackground width={36} height={36} onClick={handleNext}>
            <ChevronRight />
          </Button>
        </ButtonsWrapper>
      </TitleRow>
      <GenresWrapper>
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <Skeleton
              wrapper={GenreSkeletonWrapper}
              key={num}
              height={width < breakpoints.md ? 95 : 116}
              width={width < breakpoints.md ? 137 : 220}
              borderRadius={25}
            />
          ))}
        <Swiper
          ref={sliderRef}
          slidesPerView="auto"
          spaceBetween={width < breakpoints.md ? 9 : 20}
          modules={[Pagination]}
        >
          {!isLoading &&
            genres?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <Link to={`/genres/${genre.id}`}>
                  <GenresCard name={genre.name} backgroundImage={genre.picture_medium} />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </GenresWrapper>
    </Wrapper>
  );
}

export default Genres;
