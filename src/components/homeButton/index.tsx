import React from 'react';

import { Button, TitleButton } from './styles';

interface HomeButtonProps {
   titleProps: string;
   functionProps: () => void;
   backgroundColor: string;
   titleColor: string;
}

export function HomeButton({
    backgroundColor, 
    titleProps, 
    functionProps, 
    titleColor
}: HomeButtonProps){


    return(
        <Button
            backgroundColor={backgroundColor}
            onPress={functionProps}
        >
            <TitleButton
                titleColor={titleColor}
            >
                { titleProps }
            </TitleButton>   
        </Button>
    )
}