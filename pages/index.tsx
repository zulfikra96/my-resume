import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Navbar from "./components/Navbar"
import PageContent from "./components/PageContent";
import Footer from "./components/Footer"


export default class Home extends React.Component {


  render = () => {
    return (
      <div>
        <Head>
          <title>Zulfikra</title>
          <meta name="description" content="Zulfikra's Online Resume" />
          <meta name="keywords" content="cv, curriculum vitae, resume, online resume, zulfikra l. abdjul, zulfikra, zulfikra96" />
          <meta name="author" content="Zulfikra L. Abdjul"></meta>

          {/* facebook meta */}
          <meta property="og:url" content="https://zulfikra.milulabs.net" />
          <meta property="og:type" content="Online Resume" />
          <meta property="og:title" content="Zulfikra's Online Resume" />
          <meta property="og:description" content="More than three years of experience as a full-stack software developer. Able to work on front-end developer, back-end developer, mobile developer, and DevOps. And also able to perform unit testing to prevent bugs earlier. I am an enthusiast who learns anything about technology and always be excited to getting new challenge." />
          <meta property="og:image" content={'/images/zulfikra.jpg'} />
        </Head>
        <div >
          <Navbar />
          <PageContent />
          <Footer />
          <script dangerouslySetInnerHTML={{ __html: `${process.env.jquery}` }} type="text/javascript"></script>
          <script dangerouslySetInnerHTML={{ __html: `${process.env.popperJs}` }} type="text/javascript"></script>
          <script dangerouslySetInnerHTML={{ __html: `${process.env.bootstrapJs}` }} type="text/javascript"></script>
          <script dangerouslySetInnerHTML={{ __html: `${process.env.uiKitJs}` }} type="text/javascript"></script>
          <script dangerouslySetInnerHTML={{ __html: `${process.env.aosJs}` }} type="text/javascript"></script>
          <script dangerouslySetInnerHTML={{ __html: `${process.env.mainJs}` }} type="text/javascript"></script>
        </div>
      </div>
    );
  }
}
