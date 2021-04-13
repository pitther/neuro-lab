import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader,
    IonItem,
    IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Лабораторна робота 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Лабораторна робота</IonCardTitle>
                        <IonCardSubtitle>Нейромережні технології та їх застосування
                        </IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Умова:</IonCardTitle>
                        <IonCardSubtitle>На координатній площині x1Ox2 задані 2 класи значень пар, представлених координатами ( x1;x2 )
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardHeader>
                        <IonCardTitle>Відповідно до свого номера варіанта визначити: </IonCardTitle>
                        <IonCardSubtitle>- до якого класу належить поставлена задача класифікації (зобразити приклади координат цих двох класів на графіку);
                        </IonCardSubtitle>
                        <IonCardSubtitle>- чи потрібне навчання
                        </IonCardSubtitle>
                        <IonCardSubtitle>- побудуйте математичну модель штучного нейрона для розв’язання поставленої задачі;
                        </IonCardSubtitle>
                        <IonCardSubtitle>- розглянути всі можливі випадки, коли нейрон з обраним «суматором» і функцією активації не класифікує, записати обмеження.
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardHeader>
                        <IonCardTitle>Варіант 18</IonCardTitle>
                        <IonCardSubtitle>Значення (x1;x2) у 1 і 4 чверті (наприклад, (1; 1) (1;5) (2; 1), (3; -2) (3; -2) (5; -6)) та у 2 і 3 чверті координатної площини ( наприклад, (-4; 5) (-3; 2) (-5; 4), (-4; -1) (-2; -5) (-3; -1) (-3; -4)).
                        </IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Виконав</IonCardTitle>
                        <IonCardSubtitle>
                            Овсійчук Петро В'ячеславович КН-31/2
                        </IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
