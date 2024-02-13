export interface ILoadDataBase<
  DataType = unknown,
  LoadDataReturnType = Promise<void>,
  LoadDataOptionsType = unknown
> {
  data: DataType | null
  loadData(options: LoadDataOptionsType): LoadDataReturnType
}
