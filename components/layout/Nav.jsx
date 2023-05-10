import Link from "next/link";

function Nav() {
  return (
    <div className='Nav'>
      <Link href='/'>
        <p>All Events</p>
      </Link>
    </div>
  );
}

export default Nav;
