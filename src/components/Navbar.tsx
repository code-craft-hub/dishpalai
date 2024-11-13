import { Navbar } from "flowbite-react";
import { Link } from "react-scroll";
import { ModeToggle } from "./mode-toggle";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link}>
        <img src="/assets/logo.png" className="mr-3 h-16" alt="Dishpal.AI" />
      </Navbar.Brand>
      <div className=" flex md:hidden gap-4 items-center ">
        <ModeToggle />
        <Navbar.Toggle />
     </div>
      <Navbar.Collapse>
     
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="service"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          Services
        </Navbar.Link> <div className="hidden items-center ">
        <ModeToggle />
     </div>
      </Navbar.Collapse> 
    </Navbar>
  );
}

// activeClass="border-b-2 border-blue-500"
