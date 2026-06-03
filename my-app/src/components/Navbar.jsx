import React from 'react';
import { navLinks } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Navbar = () => {
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
                <a href="#home" className="flex items-center gap-2">
                    <p className="font-sf-pro font-medium text-stone-900">T R I S T A N S-W O R L D</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="text-stone-900">{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
