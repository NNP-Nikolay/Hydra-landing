import { About } from './Sections/About';
import VirtualReality from './Sections/VirtualReality';

export default function Main(): React.JSX.Element {
  return (
    <main className='main'>
      <VirtualReality />
      <About />
    </main>
  )
}