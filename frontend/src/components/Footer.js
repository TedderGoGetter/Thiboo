import './Footer.scss'

const Footer = () => {

    const yt2 = new URL('../images/yt2.png', import.meta.url)
    const yt3 = new URL('../images/yt3.png', import.meta.url)
    const li2 = new URL('../images/li2.png', import.meta.url)
    const li3 = new URL('../images/li3.png', import.meta.url)


    return (
        <footer className='footerContainer'>
            <a href="https://www.youtube.com/c/ThibaultTresca" target="_blank" rel="noreferrer">
                <img src={yt2} alt="" className={"icons yt1"}></img>
            </a>
            <a href="https://www.linkedin.com/in/trescathibault/" target="_blank" rel="noreferrer">
                <img src={li2} alt="" className={"icons li1"}></img>    
            </a>
        </footer>

    )
}

export default Footer



