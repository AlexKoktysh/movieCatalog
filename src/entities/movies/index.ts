import MovieCard from "./ui/Card.vue";
import CardWrapper from "./ui/CardWrapper.vue";
import CardSkeleton from "./ui/Skeleton.vue";

export { moviesAPI } from "./api";
export {
    moviesModule,
    type IMovieType,
    type IQueryType,
    type IMovieState,
    type IPagination,
} from "./model";
export { MovieCard, CardWrapper, CardSkeleton };
