import { navLinks } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Navbar = () => {
    const isHomePage = window.location.pathname === "/";

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });
        
        navTween.fromTo('nav', { '--nav-bg-opacity': 0, '--nav-blur': '0px'} , {
            '--nav-bg-opacity': 0.6,
            '--nav-blur': '16px',
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <nav>
            <div>
                <a href="/" className="flex items-center gap-2">
                    <p className="font-sf-pro font-medium text-stone-900">TRISTAN'S WORLD.</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href ?? `${isHomePage ? "" : "/"}#${link.id}`}
                                className="text-stone-900"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
