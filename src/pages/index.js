/* This example requires Tailwind CSS v2.0+ */
import React from "react"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Gatsby Tailwind Boilerplate</title>
        <meta name="desctiption" content="This is the description for our website" />
        <meta name="keywords" content="gatsby, tailwindcss" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <main>

        <section id="billboard" className="pt-20 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8">

          <div className="flex">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Gatsby Boilerplate</span>{' '}
                <span className="block text-teal-600 xl:inline">TailwindUI</span>
              </h1>
              <p className="pb-4 mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Gatsby Boilerplate for TailwindUI with PurgeCSS by <a href="http://twitter.com/sethmbhele" target="_blank"><span className="font-medium">Seth Mbhele</span></a>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-2 py-2 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700 md:py-2 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-2 py-2 text-base font-medium text-teal-700 bg-teal-100 border border-transparent rounded-md hover:bg-teal-200 md:py-2 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>


            <div className="lg:w-1/2">
              <img
                className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://images.nappy.co/uploads/large/20201011-7z8a2449-21602704394if0m78djifmgjkkthodrrxmhzrogic5xvu5qdktjisaefpvffzlexz6apffw9tinxq2libvj92thfxpv6qccp9iwuflddkiqzzz4.jpg?auto=format&fm=jpg&w=1280&q=75"
                alt=""
              />
            </div>
          </div>
        </section>

      </main>

    </Layout >
  )
}
