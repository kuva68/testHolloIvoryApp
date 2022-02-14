import { icons } from '@constants/icons'
import React,{useState} from 'react'


export default function CharacterIcon({name,height}:
    {name: string, height: number}){
       
            switch(name){
                case 'energy':
                    return (
                        <icons.Energy height={height}/>
                    )
                case 'smart':
                    return(
                        <icons.Smart height={height}/>
                    )
                case 'leader':
                    return (
                        <icons.Star height={height}/>
                    )
                    case 'calmness':
                    return (
                        <icons.Calm height={height}/>
                    )
                    case 'speed':
                    return (
                        <icons.Speed height={height}/>
                    )
                default :
                    return (
                    <icons.Wisdom height={height}/>
                    )
            }
        }
       
   
