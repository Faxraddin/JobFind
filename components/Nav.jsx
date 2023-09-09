'use client'
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-sec1">
                    <h1>JOBUI</h1>
                </div>
                <div className="navbar-sec2">
                    <Link className="link" href={'/'}>Home</Link>
                    <Link className="link" href={'/'}>Category</Link>
                    <Link className="link" href={'/'}>Blog</Link>
                    <Link className="link" href={'/'}>Contact</Link>
                </div>
                <div className="navbar-sec3">
                    <Link className="sign-in" href={'/'}>Home In</Link>
                    <Link className="sign-out" href={'/'}>Sign Out</Link>
                </div>

            </div>
        </nav>
    )
}

export default Nav;