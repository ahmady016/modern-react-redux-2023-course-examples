import Link from '../Router/Link'

const Navbar: React.FC = () => {
	return (
		<nav>
			<div className="nav-wrapper">
				<a className="brand-logo">Modern React Redux Course PART 01</a>
				<ul id="nav-mobile" className="right">
					<li>
						<Link to="/tasks">Tasks</Link>
					</li>
					<li>
						<Link to="/photos">Photos</Link>
					</li>
					<li>
						<Link to="/countries">Countries</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
