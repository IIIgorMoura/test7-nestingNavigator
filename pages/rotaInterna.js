import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/';
import Tela1 from './tela1';
import Tela2 from './tela2';
import Tela3 from './tela3';

import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function RotaInterna() {
    const [info1, setInfo1] = useState('');
    const [info2, setInfo2] = useState('');

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: "#cd0",
                tabBarStyle: {
                    position: 'absolute',
                    height: 60,
                    bottom: 30,
                    right: 30,
                    left: 30,
                    borderRadius: 5,
                    backgroundColor: "#cfa",
                },

            }}>
            <Tab.Screen
                name="tela1"
                component={() => <Tela1 textoPronto={setInfo1} textoPronto2={setInfo2} />}
                options={{
                    tabBarBadge: 1,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="home-outline" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="home-outline" />)
                    }
                }}
            >
            </Tab.Screen>

            <Tab.Screen
                name="tela2"
                component={Tela2}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<AntDesign name="link" size={25} color="black" />)
                        }
                        return (<AntDesign name="link" size={20} color="black" />)
                    }
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name="tela3"
                component={() => <Tela3 texto={info1} texto2={info2} />}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<AntDesign name="sharealt" size={25} color="black" />)
                        }
                        return (<AntDesign name="sharealt" size={20} color="black" />)
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    )
}