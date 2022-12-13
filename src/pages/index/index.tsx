import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import Test from "#widgets/test";
import "./index.scss";

console.log(Test);

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Test />
      </View>
    );
  }
}
