import React from 'react'

export interface AppProviderProps {}

export interface AppProviderState {}

export const appContext = React.createContext<AppProviderState>({})

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
      <appContext.Provider value={this.state}>
        {this.props.children}
      </appContext.Provider>
    )
  }
}
