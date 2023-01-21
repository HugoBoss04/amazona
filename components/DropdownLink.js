import Link from 'next/link'

const DropdownLink = ({ href, children, ...rest }) => {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}
export default DropdownLink
