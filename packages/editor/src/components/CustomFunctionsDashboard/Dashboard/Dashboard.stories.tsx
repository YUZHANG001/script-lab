import React from 'react'

import { Dashboard } from './'
import { BasicSummary } from '../Summary/Summary.stories'
import { BasicConsole } from '../Console/Console.stories'
import { storiesOf } from '@storybook/react'
import { getHeaderFabricTheme } from '../../../theme'

const headerFabricTheme = getHeaderFabricTheme('EXCEL')
const Dummy = ({ letter }) => <div>I AM {letter}</div>

storiesOf('Custom Functions|Dashboard', module)
  .add('basic', () => (
    <Dashboard
      headerFabricTheme={headerFabricTheme}
      items={{
        Alpha: <Dummy letter="A" />,
        Bravo: <Dummy letter="B" />,
        Charlie: <Dummy letter="C" />,
      }}
      shouldPromptRefresh={false}
      isStandalone={false}
    />
  ))
  .add('with actual tabs', () => (
    <Dashboard
      headerFabricTheme={headerFabricTheme}
      items={{ Summary: <BasicSummary />, Console: <BasicConsole /> }}
      shouldPromptRefresh={false}
      isStandalone={false}
    />
  ))
  .add('with refresh', () => (
    <Dashboard
      headerFabricTheme={headerFabricTheme}
      items={{ Summary: <BasicSummary />, Console: <BasicConsole /> }}
      shouldPromptRefresh={true}
      isStandalone={false}
    />
  ))
  .add('as standalone', () => (
    <Dashboard
      headerFabricTheme={headerFabricTheme}
      items={{ Summary: <BasicSummary />, Console: <BasicConsole /> }}
      shouldPromptRefresh={true}
      isStandalone={true}
    />
  ))