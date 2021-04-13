import {IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonCardContent, IonCardSubtitle, IonRow, IonCol, IonButton, IonGrid} from '@ionic/react';
import './Tab2.css';
import React, {useState} from "react";
import { LineChart, Line, YAxis, XAxis, ZAxis, CartesianGrid, Tooltip, Legend, ScatterChart, Scatter, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Toast } from '../components/Toast';
import { MathComponent } from 'mathjax-react'

import MathJax from 'react-mathjax-preview'



const Tab2: React.FC = () => {
    const [toastMessage, setToastMessage] = useState<string>("");
    const [showToast, setShowToast] = useState(false);

    const [inputDiap, setInputDiap] = useState<string>();

    const [activFunc, setActivFunc] = useState<any>({
        asciiMath:'`z = \\frac{1}{1 + e^{(x_{1} + 0\\times x_{2}  )} } `'
    });

    const [textRes, setTextRes] = useState<string>();

    const [dataDots, setDataDots] = useState<any>([
        {fill:'white',x:0,y:0},
        {fill:'#ff6961',x:-1,y:1},
        {fill:'#ff6961',x:-2,y:2},
        {fill:'#ff6961',x:-3,y:3},
        {fill:'#ff6961',x:-4,y:4},
        {fill:'#ff6961',x:-5,y:5},

        {fill:'#ff6961',x:-1,y:-1},
        {fill:'#ff6961',x:-2,y:-2},
        {fill:'#ff6961',x:-3,y:-3},
        {fill:'#ff6961',x:-4,y:-4},
        {fill:'#ff6961',x:-5,y:-5},

        {fill:'#82ca9d',x:1,y:1},
        {fill:'#82ca9d',x:2,y:2},
        {fill:'#82ca9d',x:3,y:3},
        {fill:'#82ca9d',x:4,y:4},
        {fill:'#82ca9d',x:5,y:5},

        {fill:'#82ca9d',x:1,y:-1},
        {fill:'#82ca9d',x:2,y:-2},
        {fill:'#82ca9d',x:3,y:-3},
        {fill:'#82ca9d',x:4,y:-4},
        {fill:'#82ca9d',x:5,y:-5},
        ]);


    const onChangeInputDiap = (e:any)=>{
        const text = e.detail.value;
        setInputDiap(text);
    }

    const calc = (numbers:any) => {
        let tempData = dataDots;
        let newDot;
        let z = 1 / (1 + Math.pow(2.71828,numbers.a+0*numbers.b))
        if ( z > 0.5){
            newDot = ({fill:'#ff6961',label:"Точка №"+dataDots.length,x:numbers.a, y:numbers.b, z:z.toFixed(4)})
            setTextRes(`Точка №${dataDots.length} (${numbers.a}, ${numbers.b}) відноситься до 1 класу`);
        } else if (z < 0.5){
            newDot = ({fill:'#82ca9d',label:"Точка №"+dataDots.length,x:numbers.a, y:numbers.b, z:z.toFixed(4)})
            setTextRes(`Точка №${dataDots.length} (${numbers.a}, ${numbers.b}) відноситься до 2 класу`);
        } else {
            newDot = ({fill:'white',label:"Точка №"+dataDots.length,x:numbers.a, y:numbers.b, z:z.toFixed(4)})
            setTextRes(`Точка №${dataDots.length} (${numbers.a}, ${numbers.b}) не відноситься до жодного з класів`);
        }

        setActivFunc({
            asciiMath: '`z = \\frac{1}{1 + e^{ '+numbers.a+' + 0\\times '+numbers.b+' )}  = '+z.toFixed(4)+' `'
        })

        tempData.push(newDot)
        setDataDots(tempData);
    }

    const onClickClear = () => {
        setDataDots([]);
    }

    const onClickBulid = ()=>{
        if (!inputDiap){
            setToastMessage((prev:string)=>{
                return "Задайте нечітку інтервальну оцінку";
            });
            setShowToast(true);
            return;
        }

        let numbers = {
            a: 0,
            b: 0
        };

        if (inputDiap){
            const numArr = inputDiap.split(" ");
            if (numArr.length == 2 && typeof parseFloat(numArr[0]) == "number" && typeof parseFloat(numArr[1]) == "number"){
                numbers.a = parseFloat(numArr[0]);
                numbers.b = parseFloat(numArr[1]);
            } else {
                setToastMessage((prev:string)=>{
                    return "Невірно заданий проміжок";
                });
                setShowToast(true);
                return;
            }
        } else {
            return
        }

        calc(numbers);
    }








    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Вирішення</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Вхідні дані (точка x1, x2)</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonLabel position="floating">Задати x1, x2</IonLabel>
                            <IonInput placeholder={"-1 1"} onIonChange={(e) => onChangeInputDiap(e) } value={inputDiap}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonButton onClick={ (e) => onClickBulid()} fill="outline" expand="block" color="primary">Побудувати</IonButton>
                            <IonButton onClick={ (e) => onClickClear()} fill="outline" expand="block" color="danger">Очистити</IonButton>

                        </IonItem>
                        <Toast showToast={showToast} type={"danger"} setShowToast={setShowToast} message={toastMessage}/>
                    </IonCardContent>
                </IonCard>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Результат</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent  >
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol>
                                                <IonItem>
                                                    <MathJax math={activFunc.asciiMath} />
                                                </IonItem>
                                                <IonCardHeader>
                                                    <IonCardTitle>{textRes}</IonCardTitle>
                                                </IonCardHeader>
                                                <IonItem/>
                                            </IonCol>
                                            <IonCol style={{height:"400px"}}>
                                                <ResponsiveContainer width="100%">
                                                    <ScatterChart data={dataDots} height={400} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                                        <XAxis type="number"  dataKey="x"  />
                                                        <YAxis type="number"  dataKey="y"/>
                                                        <ZAxis type="number" dataKey="z" />
                                                        <Tooltip cursor={{ strokeDasharray: '1 1' }} />
                                                        <Legend/>
                                                        <Scatter name="1 клас" data={dataDots} fill={"#ff6961"} />
                                                        <Scatter name="2 клас" data={dataDots} fill={"#82ca9d"} />
                                                        <Scatter name="Без класу" data={dataDots} fill={"white"} />
                                                    </ScatterChart>
                                                </ResponsiveContainer>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCardContent>
                            </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
