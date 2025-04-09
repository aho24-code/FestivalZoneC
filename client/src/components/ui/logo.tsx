import { Link } from 'wouter';

const Logo = () => {
  return (
    <Link href="/#home">
      <div className="text-2xl font-accent text-white tracking-wider cursor-pointer">
        FESTIVAL ZONE <span className="text-secondary">C</span>
      </div>
    </Link>
  );
};

export default Logo;
