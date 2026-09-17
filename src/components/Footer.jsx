import './Footer.css'

function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <footer className="footer">
            <div className="footer-main">
                <h2>OKAY, THAT'S ENOUGH</h2>
                <p>BUILT WITH CURIOSITY, COFFEE & WAY TOO MANY TABS</p>

                <button
                    type="button"
                    className="scroll-top"
                    onClick={handleScrollToTop}
                >
                    ↑ BACK TO TOP
                </button>
            </div>

            <div className="footer-bottom">
                <span>© 2026 SABINAYA</span>
                <span>STUDENT · DEVELOPER · TINKERER</span>
            </div>
        </footer>
    )
}

export default Footer