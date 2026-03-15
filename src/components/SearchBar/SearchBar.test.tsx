import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import SearchBar from './SearchBar'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('SearchBar', () => {
  it('renders search input', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    )

    expect(getByRole('textbox')).toBeTruthy()
  })
})