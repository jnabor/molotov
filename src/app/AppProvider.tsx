import React from 'react'

export interface AppProviderProps {}

export interface AppProviderState {}

export const AppContext = React.createContext<AppProviderState>({})

export class AppProvider extends React.Component<
  AppProviderProps,
  AppProviderState
> {
  constructor(props: AppProviderProps) {
    super(props)
    this.state = {}
  }

  componentDidMount = () => {}

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
