import { icons } from '@constants/icons'
import React,{useState} from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import styles from './styles'
import { Menu, MenuItem} from 'react-native-material-menu';
import { colors } from '@constants/colors';

export default function TextInputContainer({title,  setNumber, number}:
    {title: string, setNumber: (number: number | null)=>void, number: number | null}){
        const [visible, setVisible] = useState<boolean>(false);

        const hideMenu = (number?: number | null) => {
            setVisible(false)
            if(number)setNumber(number)
        };
      
        const showMenu = () => setVisible(true);

        const Anchor = () => {
            return (
                <TouchableOpacity style={styles.anchor}onPress={showMenu}>
                    <Text style={styles.anchorText}>{number}</Text>
                    <View style={styles.iconView}>
                        <icons.ArrowDown />
                    </View>
                    
                </TouchableOpacity>
            )
        }
       
    return (
        <View style={styles.TopIconsContainer} >
            <Text style={styles.text}>
                {title}
            </Text>
            <View style={styles.IconsContainer}>
                <Menu
                    visible={visible}
                    anchor={<Anchor/>}
                    onRequestClose={hideMenu}
                >
                    <MenuItem 
                        style={{borderRadius: 10, backgroundColor: number === 32 ? colors.orange : colors.white}}
                        onPress={()=>hideMenu(32)}
                        pressColor={colors.orange}
                        textStyle={[styles.textStyle,{color:number === 32 ? colors.white : colors.orange}]}
                    >32</MenuItem>
                    <MenuItem 
                        style={{borderRadius: 10, backgroundColor: number === 33 ? colors.orange : colors.white}}
                        onPress={()=>hideMenu(33)}
                        pressColor={colors.orange}
                        textStyle={[styles.textStyle,{color:number === 33 ? colors.white : colors.orange}]}
                    >33</MenuItem>
                    <MenuItem  
                        style={{borderRadius: 10, backgroundColor: number === 34 ? colors.orange : colors.white}}
                        onPress={()=>hideMenu(34)}
                        pressColor={colors.orange}
                        textStyle={[styles.textStyle,{color:number === 34 ? '#ffffff' : colors.orange}]}
                    >34</MenuItem>
                    <MenuItem 
                        style={{borderRadius: 10, backgroundColor: number === 35 ? colors.orange : colors.white}}
                        onPress={()=>hideMenu(35)}
                        pressColor={colors.orange}
                        textStyle={[styles.textStyle,{color:number === 35 ? colors.white : colors.orange}]}
                    >35</MenuItem>
                </Menu>
            </View>
        </View>
    )
}