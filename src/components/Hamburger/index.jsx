import './style.scss';

function Hamburger({ isOpen }) {
    return (
        <>
            <div className="hamburger">
                <div className="burger burger_1"></div>
                <div className="burger burger_2"></div>
                <div className="burger burger_3"></div>
            </div>
            <style jsx='true'>{`
                .burger_1 {
                    position: ${ isOpen ? 'absolute' : 'initial'};
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                    transform-origin: center center
                }
                .burger_2 {
                    transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger_3 {
                    position: ${ isOpen ? 'absolute' : 'initial'};
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                    transform-origin: center center
                }
            `}</style>
        </>
    )
}

export default Hamburger