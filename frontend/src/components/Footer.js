import './Footer.scss'

const Footer = () => {

    const yt1 = new URL('../images/yt1.png', import.meta.url)
    const li1 = new URL('../images/li1.png', import.meta.url)


    return (
        <footer className='footerContainer'>
            <a href="https://www.youtube.com/c/ThibaultTresca" target="_blank" rel="noreferrer">
                <img src={yt1} alt="" className={"icons yt1"}></img>
            </a>
            <a href="https://www.linkedin.com/in/trescathibault/" target="_blank" rel="noreferrer">
                <img src={li1} alt="" className={"icons li1"}></img>     
            </a>
        </footer>

    )
}

export default Footer



