import React from "react";

import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { DrawerHeader, DrawerContent } from "./styles";

import LogoBibliaVivaGospel from "../../../assets/LogoBibliaVivaGospel.svg";

export function CustomDrawer(props){

    return(
        <DrawerContentScrollView
            {...props}
        >
            <DrawerHeader>
                <LogoBibliaVivaGospel 
                    width={250} 
                    style={{
                        marginTop: 10
                    }}
                />
            </DrawerHeader>

            <DrawerContent
                style={{
                    marginTop: 30
                }}
            >
                <DrawerItemList 
                    {...props}
                />
            </DrawerContent>


        </DrawerContentScrollView>
    )
}