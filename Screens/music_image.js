import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'

const ImagesExample = () => (
   <View>
      <Image source = {require('../images/Music.png')} style={{ width: 350, height: 350 , marginTop: 20 }} />
      <View>
         <Text>@Lzy Lad</Text>
         <Text>3.33 ETH</Text>
      </View>
   </View>
)
export default ImagesExample