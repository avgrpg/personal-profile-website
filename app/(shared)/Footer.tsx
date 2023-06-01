import React from 'react'
import Layout from '../(home)/Layout'

type Props = {}

function Footer({}: Props) {
  return (
    <footer>
      <Layout className='flex justify-between items-center px-4 dark:text-light dark:bg-dark'>
        <span>&copy; {new Date().getFullYear()} Ben Tsui - All Rights Reserved. </span>
      </Layout>
    </footer>
  )
}

export default Footer