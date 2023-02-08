export default interface Order {
  id?: number,
  error?: {
    message: string
  }
  userId: number,
  productsIds: number[],
}