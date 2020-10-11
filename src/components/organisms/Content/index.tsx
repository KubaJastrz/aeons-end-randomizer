import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

import ErrorBoundary from '../../atoms/ErrorBoundary'
import HeaderPlaceholder from './HeaderPlaceholder'
import Wrapper from './Wrapper'

import Routing from './Routing'

type Props = {
  isLoading: boolean
}

const Content = ({ isLoading }: Props) => (
  <Wrapper isLoading={isLoading}>
    <HeaderPlaceholder />
    <ErrorBoundary>
      {isLoading ? <CircularProgress /> : <Routing />}
    </ErrorBoundary>
  </Wrapper>
)

export default React.memo(Content)
