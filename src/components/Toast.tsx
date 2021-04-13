import React from 'react';
import {IonToast} from '@ionic/react';

interface ContainerProps {
    message: string;
    showToast:boolean;
    setShowToast:any;
    type:string;
}

export const Toast: React.FC<ContainerProps> = ({message,showToast,setShowToast,type}) => {

    return (
        <div>

     <IonToast
                color={type}
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={message}
                duration={1000}
                position="top"
            />
        </div>
    );
};