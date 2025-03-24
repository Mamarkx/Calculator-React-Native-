import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useContext } from 'react';
import { ThemeContext} from '../context/ThemeContext';
import { Colors} from '../styles/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Calculator() {
const [modalVisible, setModalVisible] = useState(false);
const [displayValue, setDisplayValue] = useState("0");
const [operator, setOperator] = useState("");
const [firstValue, setFirstValue] = useState("");
const [isNewInput, setIsNewInput] = useState(false);
const { theme, toggleTheme } = useContext(ThemeContext);
const themeColors = Colors[theme];

const InputNumber = (num) => {
    if (isNewInput) {
        setDisplayValue(num);
        setIsNewInput(false);
    } else {
        setDisplayValue( displayValue=== "0" ? num : displayValue + num);
    }
};
const InputOperator = (newOperator) => {
    if (operator && !isNewInput) {
        Calculation();
    } else if (!operator) {
        setFirstValue(displayValue);  
    } else {
        setFirstValue(displayValue);
    }
    setOperator(newOperator);
    setIsNewInput(true);
};

const Calculation = () => {
    if (operator && firstValue !== "") {
        try {
            const result = eval(`${firstValue} ${operator} ${displayValue}`);
            setDisplayValue(result.toString());
            setFirstValue(result.toString()); 
        } catch (error) {
            setDisplayValue("Error");
        }
    }
    setIsNewInput(true);
};

const Clear = () => {
    setDisplayValue("0");
    setFirstValue("");
    setOperator("");
};

const backspace = () => {
    setDisplayValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
};

const InputDecimal = () => {
    if (!displayValue.includes(".")) {
        setDisplayValue(displayValue + ".");
    }
};

const ShowCredit = () => {
    setModalVisible(true);
};

const closeModal = () => {
    setModalVisible(false);
};


    const Names = [
        {hshs : 'John Mark L. Balacy' , image: require('../Izone/Yujin.jpg'), email:'johnmarkbalacy3@gmail.com'},
        {hshs :  'Robert B. Quilenderino', image: require('../Izone/Sakura.jpg'), email:'robertbarredoquilendrino@gmail.com'},
        {hshs : 'John Roy Vinson R. Dadap', image: require('../Izone/minju.jpg'), email:'royvinsondadap@gmail.com'},
        {hshs :  'Gene Clarence S. Crueldad', image: require('../Izone/hitomi.jpg'), email:'crueldad.clarence@gmail.com'},
        {hshs : 'Ric Jason E. Altamante', image: require('../Izone/Chae.jpg'), email:'yurialtamante@gmail.com'},
        {hshs :  'Earl Christian L. Magno', image: require('../Izone/hyewon.jpg'), email:'eclm0121@gmail.com'},
        {hshs :  'Angel Parcon', image: require('../Izone/Wony.jpg'), email:'parconangel0414@gmail.com'},
        {hshs : 'Jero P. Novero', image: require('../Izone/Nako.jpg'), email:'jethrojero@gmail.com'},
        {hshs : 'Kierbe P. Genoguin', image: require('../Izone/eunbi.jpeg'), email:'bhozxKierbe03@gmail.com'},
    ];
    
    return (
        <View style={[styles.container, { backgroundColor: themeColors.background }]}>
            <View style={[styles.header, { backgroundColor: themeColors.headerBackground }]}>
                <TouchableOpacity onPress={toggleTheme}>
                    <Text style={{ fontSize: 25, color: themeColors.headerText }}>
                    {theme === 'dark' ? "☀️" : "🌜"}
                </Text>

                </TouchableOpacity>
                
                <Text style={{ color: themeColors.headerText }}>Team Dadap</Text>
                <Ionicons name="information-circle-outline" size={30} 
                    color={themeColors.headerText} 
                    onPress={ShowCredit} />
            </View>
            
            <Modal
                animationType="slide" 
                transparent={true} 
                visible={modalVisible} 
                onRequestClose={closeModal} 
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback>
                            <View style={[styles.modalContent, { backgroundColor: themeColors.modalBackground }]}>
                                <Text style={[styles.creditText, { color: themeColors.modalText }]}>Group Members</Text>
                                
                                <View>
                                    {Names.map((asd, index) => {
                                        return(
                                            <View key={index} style={styles.eachName}>
                                                <Image style={styles.tinypic} source={asd.image} />
                                                <View style={styles.info}>
                                                    <Text style={[styles.groupnames, { color: themeColors.modalText }]}>{asd.hshs}</Text>
                                                    <Text style={{ color: themeColors.modalText }}>{asd.email}</Text>
                                                </View>
                                            </View>
                                        )    
                                    })}
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            
            <View style={[styles.display, { backgroundColor: themeColors.display }]}>
                <Text style={{ fontSize: 30, fontWeight: '300', color: themeColors.text }}>{firstValue + operator}</Text>
                <View style={styles.output}>
                    <Text style={{ fontSize: 70, fontWeight: '300', color: themeColors.text }}>{displayValue}</Text>
                </View>
            </View>
            
            <View style={[styles.keypad, { backgroundColor: themeColors.keypad , borderRadius:15, }]}>
                <View>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.operatorButton }]} onPress={Clear}>
                            <Text style={{ color: themeColors.operatorButtonText, fontSize: 30 }}>C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.operatorButton }]} onPress={backspace}>
                            <Text style={{ color: themeColors.operatorButtonText, fontSize: 30 }}>⌫</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.operatorButton }]} onPress={() => InputOperator('%')}>
                            <Text style={{ color: themeColors.operatorButtonText, fontSize: 30 }}>%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.operatorButton }]} onPress={() => InputOperator('/')}>
                            <Text style={{ color: themeColors.operatorButtonText, fontSize: 30 }}>÷</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.button }]} onPress={() => InputNumber('7')}>
                            <Text style={{ color: themeColors.buttonText, fontSize: 30 }}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.button }]} onPress={() => InputNumber('8')}>
                            <Text style={{ color: themeColors.buttonText, fontSize: 30 }}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.button }]} onPress={() => InputNumber('9')}>
                            <Text style={{ color: themeColors.buttonText, fontSize: 30 }}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.operatorButton }]} onPress={() => InputOperator('*')}>
                            <Text style={{ color: themeColors.operatorButtonText, fontSize: 30 }}>x</Text>
                        </TouchableOpacity>       
                    </View>    
                    
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.button }]} onPress={() => InputNumber('4')}>
                            <Text style={{ color: themeColors.buttonText, fontSize: 30 }}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.button }]} onPress={() => InputNumber('5')}>
                            <Text style={{ color: themeColors.buttonText, fontSize: 30 }}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.button }]} onPress={() => InputNumber('6')}>
                            <Text style={{ color: themeColors.buttonText, fontSize: 30 }}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.operatorButton }]} onPress={() => InputOperator('-')}>
                            <Text style={{ color: themeColors.operatorButtonText, fontSize: 30 }}>-</Text>
                        </TouchableOpacity>       
                    </View>    
                    
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.button }]} onPress={() => InputNumber('1')}>
                            <Text style={{ color: themeColors.buttonText, fontSize: 30 }}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.button }]} onPress={() => InputNumber('2')}>
                            <Text style={{ color: themeColors.buttonText, fontSize: 30 }}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.button }]} onPress={() => InputNumber('3')}>
                            <Text style={{ color: themeColors.buttonText, fontSize: 30 }}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.operatorButton }]} onPress={() => InputOperator('+')}>
                            <Text style={{ color: themeColors.operatorButtonText, fontSize: 30 }}>+</Text>
                        </TouchableOpacity>       
                    </View>    
                    
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.button, flex:0.8 }]} onPress={() => InputNumber('0')}>
                            <Text style={{ color: themeColors.buttonText, fontSize: 30 }}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.button }]} onPress={InputDecimal}>
                            <Text style={{ color: themeColors.buttonText, fontSize: 30 }}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: themeColors.operatorButton }]} onPress={Calculation}>
                            <Text style={{ color: themeColors.operatorButtonText, fontSize: 30 }}>=</Text>
                        </TouchableOpacity>       
                    </View>  
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    display: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        overflow: 'hidden',
        padding: 18,
    },
    keypad: {
        flex: 2,
        padding: 5,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        justifyContent: 'center',
        paddingVertical: 9
    },
    button: {
        height: 70,
        width: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    output: {
        height: 100,
        overflow: 'hidden',
        flexShrink: 1,
    },
    header: {
        flexDirection: 'row',       
        justifyContent: 'space-between',
        height: 55,
        padding: 10,
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContent: {
        padding: 30,
        borderRadius: 10,
        alignItems: 'center',
        width: 350,
        height: 620,
    },
    creditText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    closeButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    groupnames: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    eachName: {
        flexDirection: 'row',
        padding: 5,
        gap: 10,

    },
    tinypic: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    info: {
        paddingVertical: 4
    },
});