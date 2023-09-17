import { LoadMoreBtn } from './Button.styled';

export const Button = ({ handleLoadMore }) => {
  return <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>;
};
