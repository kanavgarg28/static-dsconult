import { NextSeo } from 'next-seo'
import clsx from 'clsx'
import Layout1 from '../components/Layout1'
import Image from '../components/Image'
import styles from '../styles/Home.module.scss'
import logo from '../public/logo@2x.png'

const Home: React.FC = () => {
  return (
    <Layout1>
      <NextSeo
        title="NextSSS"
        description="Next.js Static Site Starter"
        openGraph={{
          type: 'website',
        }}
      />
      <div
        className={clsx(
          'grid grow shrink-0 place-content-center place-items-center',
          styles.hero
        )}
      >
        <figure className="max-w-3xl">
          <Image src={logo} alt="NextSSS Logo" />
        </figure>
        <h1 className="mt-10 font-extrabold text-center">Hello, World!</h1>
      </div>
    </Layout1>
  )
}

export default Home
