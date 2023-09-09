import '@styles/global.css';
import Nav from '@components/Nav';

export const metadata = {
    title:'test-app',
}

const layout = ({children}) => {
  return (
    <html>
        <body>
            <div>
                <Nav />
            </div>
            
            <div className='app'>
                {children}
            </div>
        </body>
    </html>
  )
}

export default layout