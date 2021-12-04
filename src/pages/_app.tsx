import React, { useEffect } from 'react'
import '../../styles/globals.css'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../theme'
import createEmotionCache from '../createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

const MyApp = function MyApp(props: {
    // change later
    Component: any
    emotionCache?: EmotionCache | undefined
    pageProps: any
}) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>My page</title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}

MyApp.propTypes = {
    // fix later :)
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
}

export default MyApp
