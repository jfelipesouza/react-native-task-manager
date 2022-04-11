import React from 'react';
import {SwitchProps} from 'react-native';


export type CheckProps = SwitchProps&{
  label:string,
  setValue:any
}