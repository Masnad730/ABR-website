import React from 'react'
import Head from 'next/head'

import ScrollToTop from '../ScrollToTop'
import Topbar from '../Topbar'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children, title, canonical, descriptionContent, active }) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name='google-site-verification'
          content='Yoe0pG5MtP-BpmIMJXQxmsJ7DhS76N1Mty6FegxFCX4'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='UTF-8' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <link rel='canonical' href={canonical} />
        <meta name='description' content={descriptionContent} />
        <meta
          name='keywords'
          content='Law firm in Afghanistan
        Legal Advisor,
        Law offices in Afghanistan,
        Law firm,
        Law firm near by,
        Top law firms,
        Top law firms in Afghanistan,
        Taxation law in Afghanistan,
        Latest business news,
        Corporate law firm in Afghanistan,
        Famous law firms,
        Aviation law in Afghanistan,
        Banking law in Afghanistan,
        Business crimes in Afghanistan,
        Construction and infrastructure in Afghanistan,
        Employment and labor Law,
        Energy and natural resources of Afghanistan,
        Afghanistan government,
        Immigration law,
        Insolvency, Bankruptcy and Restructuring in Afghanistan,
        Insurance law in Afghanistan,
        Intellectual Property in Afghanistan,
        Litigation in Afghanistan,
        Arbitration and dispute resolution in Afghanistan,
        Media and Entertainment law in Afghanistan,
        Taxation in Afghanistan,
        Legal articles,
        Incorporation in Afghanistan,
        Law firm names,
        Attorney in Afghanistan,
        List of attorneys in Afghanistan,
        Afghanistan lawyers,
        Afghanistan top lawyers,
        Trademark registration in Afghanistan,
        Notarization in Afghanistan,
        Notary in Afghanistan,
        Intellectual Property rights in Afghanistan,
        Translation in Afghanistan,
        Dari Translation,
        Translation Company in Afghanistan,
        Translation services in Afghanistan,
        '
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Afghanistan Business Referral - ABR' />
        <meta property='og:title' content='Afghanistan Business Referral - ABR' />
        <meta
          property='og:description'
          content='Afghanistan Business Referrals (ABR) is a multi-disciplinary professional services network that provides legal, accountancy, financial advice to companies and individuals in the jurisdiction of Afghanistan.'
        />
        <meta property='og:url' content='https://abr.af/' />
        <meta property='og:image' content='https://abr.af/images/abr-logo.png' />
        <meta property='og:image:secure_url' content='https://abr.af/images/abr-logo.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Afghanistan Business Referral - ABR' />
        <meta
          name='twitter:description'
          content='A multi-disciplinary professional services network that provides legal, accountancy, financial advice to companies and individuals in the jurisdiction of Afghanistan.'
        />
        <meta name='twitter:image' content='https://abr.af/images/abr-logo.png' />
        <title>{title}</title>
      </Head>
      <div>
        <ScrollToTop showBelow={250} />
        <Topbar />
        <Header active={active} />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}
export default Layout
