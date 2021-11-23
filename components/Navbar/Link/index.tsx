import Link from "next/link";

type NavbarLinkProps = {
  title: string
  href: string
}

const NavbarLink = ({href, title}:NavbarLinkProps) => {
  return (
    <Link href={href}>
      <a href={href} className="inline-block mt-0 text-ruby-400 hover:text-ruby-500 mr-4 cursor-pointer">
        {title}
      </a>
    </Link>
  );
}

export default NavbarLink;