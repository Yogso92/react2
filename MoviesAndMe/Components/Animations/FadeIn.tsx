import {Animated, Dimensions, Easing} from 'react-native'
import React from 'react'

class FadeIn extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            positionTop: new Animated.Value(Dimensions.get('window').width)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.positionTop,
      {
        toValue: 0,
        duration: 500
      }
    ).start()
  }

  render() {
    return (
      <Animated.View
        style={{ top: this.state.positionTop }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

export default FadeIn
