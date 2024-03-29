import * as React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import {CenteredColumn} from '../components/Layouts'
import Button from '../components/Button'

function Home() {
    return (
        <Page>
            <CenteredColumn>
                <div className="space-y-16 md:space-y-24 ">
                    <div className="space-y-8 md:items-center">
                        <div className="prose lg:prose-lg text-primary">
                            <p>
                                Hey, I&apos;m Brian. I&apos;m a designer,{' '}
                                <a href="https://designdetails.fm">podcaster</a>,{' '}
                                <Link href="/writing" passHref>
                                    <a>writer</a>
                                </Link>
                , and{' '}
                                <a href="https://github.com/brianlovin">software tinkerer</a>.
                I&apos;m currently building{' '}
                                <a href="https://github.com/mobile">
                                    native mobile apps at GitHub
                </a>
                .
              </p>

                            <p>
                                In the past I co-founded{' '}
                                <a href="https://github.com/withspectrum/spectrum">Spectrum</a>,
                a platform for online communities. Before that, I worked at
                Facebook building payments systems, and cut my teeth as a
                product designer at Buffer.
              </p>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="/about" passHref>
                                <a>
                                    <Button>Learn more about me</Button>
                                </a>
                            </Link>
                            <a href="https://changelog.brianlovin.com">
                                <Button>My changelog</Button>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h4 className="font-list-heading">Recent Writing</h4>
                        <Link href="/writing">
                            <a className="inline-block font-medium highlight-link-hover">
                                Read all posts &rarr;
              </a>
                        </Link>
                    </div>

                    <div className="space-y-8">
                        <h4 className="font-list-heading">Select Projects</h4>
                        <Link href="/projects">
                            <a className="inline-block font-medium highlight-link-hover">
                                See all projects &rarr;
              </a>
                        </Link>
                    </div>
                </div>
            </CenteredColumn>
        </Page>
    )
}

export default Home
