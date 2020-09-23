export default class TreeNode<T> {
  constructor(
    public val: T,
    public left: TreeNode<T> = null,
    public right: TreeNode<T> = null
  ) {}
}
