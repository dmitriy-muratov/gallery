interface IPaginatedItems<T> {
  hasMore: boolean;
  page: number;
  pageCount: number;
  pictures: T | null;
}
