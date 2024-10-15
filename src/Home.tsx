import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/Navbar';

export default function Home(): React.JSX.Element {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />
    </>
  )
}