import React from 'react'
import SiteNav from './SiteNav'
import { StyledRootDiv } from './styled-components/common'
import styled from 'styled-components'
import { device } from '../style/devices'

const LayoutContainer = styled.div`
    width: 100%;
    height: 100%;
`

const StyledMain = styled.main`
    margin: auto;
    padding-bottom: 20rem;
    @media ${device.mobileS} {
        width: 100%;
        padding-left: 1rem;
        padding-right:1rem;
    }
    @media ${device.tablet} {
        width: 50%;
    }
`

const Layout = (props: { children: any }) => {

    const { children } = props

    return (
        <StyledRootDiv>
            <SiteNav />
            <LayoutContainer>
                <StyledMain id="main">
                    {children}
                </StyledMain>
            </LayoutContainer>
        </StyledRootDiv>
    )
}

export default Layout
