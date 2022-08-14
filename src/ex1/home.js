import Header from './header';
import Footer from './footer';
import Content from './contents'
import SideBar from './sidebar'
import './home.css'
function Home() {
    return (
        <div>
            <Header />
            <div className='wrapper'>
                <Content />
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default Home;