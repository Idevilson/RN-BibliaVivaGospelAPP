import React, {
    createContext,
    useContext,
    Dispatch,
    SetStateAction, useState,
    ReactNode
} from "react";


interface BibleVersionContextData {
    setVersionSelected: Dispatch<SetStateAction<versionSelectedProps>>;
    versionSelected: versionSelectedProps;
}

const BibleVersionContext = createContext<BibleVersionContextData>({} as BibleVersionContextData);

interface BibleVersionProviderProps {
    children: ReactNode;
}

interface versionSelectedProps {
    value: string;
    label: string;
}

function BibleVersionProvider({ children }: BibleVersionProviderProps){
    const [ versionSelected, setVersionSelected ] = useState<versionSelectedProps>({ value: "0" , label: "VERSÃO AA"});

    return(
        <BibleVersionContext.Provider value={{
            setVersionSelected,
            versionSelected
        }}>
            { children }
        </BibleVersionContext.Provider>
    )
}

function useBibleVersion(): BibleVersionContextData {
    return useContext(BibleVersionContext);
}

export { BibleVersionProvider, useBibleVersion };