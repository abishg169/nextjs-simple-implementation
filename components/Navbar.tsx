import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1 className=''><Link href='/'>RMS</Link></h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/make-request"><a>Make Request</a></Link>
            <Link href="/profile"><a>Profile</a></Link>
        </nav>
    );
}
 
export default Navbar;