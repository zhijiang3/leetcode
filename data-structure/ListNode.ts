export default class ListNode<T> {
  constructor(
    public val: T,
    public next: ListNode<T> = null
  ) {}
}
